'use client'

import Link from "next/link"
import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { FormDatas } from "@/utils/types"

export default function Form() {
  const router = useRouter()
  const [errors, setErrors] = useState<FormDatas>({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setErrors({}) // Clean errors before a new attempt

    const formData = new FormData(e.currentTarget)

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Send data to the server for checking
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Successful server validation
      const signInResponse = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (!signInResponse?.error) {
        router.push("/")
        router.refresh() // for proper dispaying of navigation components
      } else {
        setErrors({ general: signInResponse.error })
      }
    } else {
      // Receive server errors
      const { errors: serverErrors } = await response.json()
      setErrors(serverErrors || {})
    }

    setLoading(false)
  };

  return (
    <>
      <Link
        className="flex items-end justify-start rounded-md bg-yellow-400 p-4"
        href="/"
      >
        <div className="text-black">MyMDB</div>
      </Link>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mx-auto max-w-md mt-10"
        >
          <input
            name="email"
            className={`border border-black p-2 rounded-md ${
              errors.email ? "border-red-500" : "border-black"
            }`}
            type="email"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <input
            name="password"
            className={`border border-black p-2 rounded-md ${
              errors.password ? "border-red-500" : "border-black"
            }`}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
          {errors.general && (
            <p className="text-red-500 text-sm text-center">{errors.general}</p>
          )}
          <button
            className="text-black bg-yellow-400 px-4 py-2 rounded-md"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
          <Link className="text-white text-center" href="/register">
            No account? Register
          </Link>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-400"></div>
          <span className="px-4 text-gray-600">or</span>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="text-white bg-primary px-4 py-2 rounded-md"
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            Sign In with Github
          </button>
          <button
            className="text-black bg-white px-4 py-2 rounded-md"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </>
  );
}