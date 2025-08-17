"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // cek session user
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.push("/") // kalau belum login → redirect
      else setSession(session)
      setLoading(false)
    })

    // listener login/logout
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.push("/")
      setSession(session)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [router])

  if (loading) return <p className="text-center mt-10">Loading...</p>
  return <>{children}</>
}
