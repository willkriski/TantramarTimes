import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="border rounded-lg overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-gray-600">{post.date}</p>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">{post.category}</span>
        </div>
      </div>
    </Link>
  )
}