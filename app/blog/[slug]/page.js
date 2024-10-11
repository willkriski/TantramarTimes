import { getPostData, getSortedPostsData, getCategories } from '../../../lib/posts'
import Layout from '../../../components/Layout'

export default async function BlogPost({ params }) {
  const postData = await getPostData(params.slug)
  const categories = getCategories()

  return (
    <Layout categories={categories}>
      <article>
        <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
        <img src={postData.image} alt={postData.title} className="maxw-full h-auto object-cover mb-4" />
        {/* Check if the post content includes a PDF */}
        {postData.isPdf ? (
          <iframe
            src={`/pdfs/${postData.pdfFile}`} // Adjust the path based on where you store your PDF
            width="100%"
            height="600px"
            style={{ border: 'none' }}
            title="Embedded PDF"
          />
        ) : (
          <div className="content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
      </article>
    </Layout>
  )
}


export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}