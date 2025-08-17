import ProtectedRoute from "@/components/ProtectedRoute"
import LogoutButton from "@/components/LogoutButton"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 flex flex-col">
          <h2 className="text-lg font-bold mb-4">Fitur DSRT</h2>
          <nav className="flex flex-col gap-2">
            <a href="/editor">Manual Editor</a>
            <a href="/editor">DSRT Capsule</a>
            <a href="/editor">Promo Maker</a>
          </nav>

          {/* Tombol Logout */}
          <LogoutButton />
        </aside>

        {/* Konten */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Selamat datang di Dashboard</h1>
          <p className="text-gray-600">Pilih fitur di sidebar untuk mulai.</p>
        </main>
      </div>
    </ProtectedRoute>
  )
}
