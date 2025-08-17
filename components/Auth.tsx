"use client"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

export default function AuthForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function signIn(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    setLoading(false)
  }

  async function signUp(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
    setLoading(false)
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Login / Register</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={signIn}
          disabled={loading}
          className="bg-black text-white py-2 rounded"
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <button
          onClick={signUp}
          disabled={loading}
          className="bg-gray-700 text-white py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  )
}
