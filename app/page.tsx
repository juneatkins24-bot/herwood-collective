// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 text-center">
          The Herwood Collective
        </h1>
        <p className="text-xl text-gray-600 text-center mt-4">
          Small Spaces. Bold Impact. Real Community.
        </p>
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">75 Operators</h2>
            <p className="text-gray-600">Intimate gathering of peers who get it</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">$299 All-In</h2>
            <p className="text-gray-600">10x less cost, 10x more value</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Real Properties</h2>
            <p className="text-gray-600">Learn where you actually work</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Join the Collective
          </button>
        </div>
      </div>
    </main>
  )
}