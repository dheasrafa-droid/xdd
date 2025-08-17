"use client"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push("/") // kembali ke landing
  }

  return (
    <button
      onClick={handleLogout}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
    >
      Logout
    </button>
  )
}
