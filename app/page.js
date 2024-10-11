import { getSortedPostsData, getCategories } from '../lib/posts'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'

export default async function Home() {


  const allPostsData = getSortedPostsData()
  const categories = getCategories()

  return (
    <Layout categories={categories}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8"> {/* Added margins */}
        {allPostsData.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  )
}
