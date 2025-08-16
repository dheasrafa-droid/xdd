export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-700 text-white p-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Necromancer Academy’s Genius Summoner
          </h1>
          <p className="text-lg mb-6">
            Seorang murid jenius yang mampu mengendalikan roh terlarang di akademi necromancer.
          </p>
          <a
            href="#chapters"
            className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Baca Sekarang
          </a>
        </div>
      </section>

      {/* Sinopsis */}
      <section className="max-w-4xl mx-auto py-16 px-6" id="about">
        <h2 className="text-3xl font-bold mb-4">Sinopsis</h2>
        <p className="text-lg leading-relaxed">
          Di dunia di mana necromancer dianggap tabu, seorang pemuda dengan kemampuan langka
          muncul di akademi bergengsi. Dengan kecerdasannya, ia menantang aturan lama
          dan membuktikan bahwa bahkan roh terlarang bisa menjadi sekutu.
        </p>
      </section>

      {/* Chapter List */}
      <section className="bg-white py-16" id="chapters">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Daftar Chapter</h2>
          <ul className="space-y-4">
            <li>
              <a href="/chapter/1" className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                Chapter 1: Awal Sang Pemanggil
              </a>
            </li>
            <li>
              <a href="/chapter/2" className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                Chapter 2: Pertarungan di Akademi
              </a>
            </li>
            <li>
              <a href="/chapter/3" className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                Chapter 3: Roh Terlarang
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/preview1.jpg" alt="Preview 1" className="rounded-lg shadow" />
            <img src="/preview2.jpg" alt="Preview 2" className="rounded-lg shadow" />
            <img src="/preview3.jpg" alt="Preview 3" className="rounded-lg shadow" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>© 2025 Necromancer Academy. All Rights Reserved.</p>
        <p>
          Dibuat oleh <a href="https://facebook.com" className="text-purple-400">Prasetyo Bayu</a>
        </p>
      </footer>
    </main>
  );
}
