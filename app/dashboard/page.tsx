import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Fitur DSRT</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/editor">Manual Editor</Link>
          <Link href="/editor">DSRT Capsule</Link>
          <Link href="/editor">Promo Maker</Link>
        </nav>
      </aside>

      {/* Konten */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Selamat datang di Dashboard</h1>
        <p className="text-gray-600">Pilih fitur di sidebar untuk mulai.</p>
      </main>
    </div>
  )
}
