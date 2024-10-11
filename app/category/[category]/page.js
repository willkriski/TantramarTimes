import { getPostsByCategory, getCategories } from '../../../lib/posts'
import PostCard from '../../../components/PostCard'
import Layout from '../../../components/Layout'

function decodeCategory(encodedCategory) {
  return encodedCategory.replace(/-/g, ' ')
}

export default async function CategoryPage({ params }) {
  const decodedCategory = decodeCategory(params.category)
  const posts = getPostsByCategory(params.category)
  const categories = getCategories()

  return (
    <Layout categories={categories}>
      <h2 className="text-2xl font-bold mb-4">{decodedCategory}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8"> {/* Added margin */}
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export async function generateStaticParams() {
  const categories = getCategories()

  return categories.map((category) => ({ category }))
}