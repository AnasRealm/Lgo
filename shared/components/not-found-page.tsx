"use client";

import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { cn } from "@/lib/utils";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 mb-6">
        <FileQuestion className="h-12 w-12 text-blue-600" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl mb-2">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-4">
        Page not found
      </h2>
      <p className="text-slate-500 max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. It might have been
        removed, renamed, or doesn't exist.
      </p>
      <Link
        href="/dashboard"
        className={cn(
          "inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        )}
      >
        Go back home
      </Link>
    </div>
  );
}
