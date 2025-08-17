import AuthForm from "@/components/Auth"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <img src="/logo-dsrt.png" alt="DSRT Logo" className="w-24 mb-4" />
      <h1 className="text-3xl font-bold">DSRT - Digital Smart Revise Technology</h1>
      <p className="text-gray-600 mt-2">
        Smart editor untuk restorasi & promo maker
      </p>

      <div className="mt-6 w-full">
        <AuthForm />
        <div className="text-center mt-4">
          <Link href="/dashboard" className="text-blue-600 underline">
            Masuk ke Dashboard →
          </Link>
        </div>
      </div>
    </main>
  )
}
