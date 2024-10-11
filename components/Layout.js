import Navigation from './Navigation'

export default function Layout({ children, categories }) {
  return (
    <div className="min-h-screen bg-background font-sans">
      <header className="bg-black text-white py-6">
        <div className="max-w-4xl mx-auto px-4 text-center"> {/* Centered text */}
          <h1 className="text-4xl font-bold mb-4">Tantramar Times</h1>
          <nav className="flex justify-center"> {/* Center the navigation */}
            <Navigation categories={categories} />
          </nav>
        </div>
      </header>

      <div className="bg-gray-100 text-black py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">Shedding Light on Local Issues</h2>
          <p className="text-xl">Your trusted source for Tantramar region news and opinions</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {children}
      </main>

      <footer className="bg-black text-white mt-12 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Tantramar Times. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
