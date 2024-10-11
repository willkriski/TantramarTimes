import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

function encodeCategory(category) {
  return category.replace(/ /g, '-')
}

function decodeCategory(encodedCategory) {
  return encodedCategory.replace(/-/g, ' ')
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = fileNames.filter(fileName => fileName.endsWith('.md') && !fileName.startsWith('.'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      return {
        slug,
        ...data,
        content,
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = remark().use(html).processSync(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...data,
  }
}

export function getCategories() {
  const allPosts = getSortedPostsData()
  const categories = new Set(allPosts.map((post) => encodeCategory(post.category)))
  return Array.from(categories)
}

export function getPostsByCategory(encodedCategory) {
  const category = decodeCategory(encodedCategory)
  const allPosts = getSortedPostsData()
  return allPosts.filter((post) => encodeCategory(post.category) === encodedCategory)
}