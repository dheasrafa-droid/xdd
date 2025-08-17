"use client"
import ProtectedRoute from "@/components/ProtectedRoute"
import { useState } from "react"

export default function EditorPage() {
  const [status, setStatus] = useState("Canvas kosong")

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        {/* Sidebar Tools */}
        <aside className="w-48 bg-gray-100 p-4">
          <h2 className="font-bold mb-4">Tools</h2>
          <button
            className="block w-full px-3 py-2 mb-2 bg-blue-500 text-white rounded"
            onClick={() => setStatus("Brush dipilih")}
          >
            Brush
          </button>
          <button
            className="block w-full px-3 py-2 mb-2 bg-green-500 text-white rounded"
            onClick={() => setStatus("Text tool dipilih")}
          >
            Text
          </button>
        </aside>

        {/* Canvas */}
        <main className="flex-1 flex flex-col items-center justify-center bg-white">
          <div className="border border-gray-300 w-3/4 h-3/4 flex items-center justify-center">
            <p className="text-gray-500">{status}</p>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}
