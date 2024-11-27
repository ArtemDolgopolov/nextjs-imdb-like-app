'use client'

import Link from "next/link"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { FormDatas } from "@/utils/types"

export default function Form() {
  const router = useRouter()
  const [errors, setErrors] = useState<FormDatas>({})
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    setErrors({}); // Clean errors before a new attempt

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Sending data to the server
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const signInResponse = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInResponse?.error) {
        setErrors({ general: signInResponse.error })
      } else {
        router.push("/")
        router.refresh() // for proper dispaying of navigation components
      }
    } else {
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mx-auto max-w-md mt-10"
      >
        <div className="flex flex-col">
          <input
            name="email"
            className={`border border-black p-2 rounded-md ${
              errors.email ? "border-red-500" : "border-black"
            }`}
            type="email"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="flex flex-col">
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
        </div>

        {errors.general && (
          <p className="text-red-500 text-sm text-center">{errors.general}</p>
        )}

        <button
          className="text-black bg-yellow-400 px-4 py-2 rounded-md"
          type="submit"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <Link className="text-white text-center" href="/login">
          Have an account? Log In
        </Link>
      </form>
    </>
  );
}