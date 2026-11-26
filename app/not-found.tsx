import Link from "next/link";
import { ShellIcon } from "@/components/Decor";

export default function NotFound() {
  return (
    <main className="mist-wash flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <ShellIcon className="h-14 w-14 text-sand" />
      <h1 className="display mt-6 text-6xl text-sea">Lost at sea</h1>
      <p className="mt-4 max-w-md text-muted">This page drifted away. Let&apos;s get you back to shore.</p>
      <Link href="/" className="btn-primary mt-8">
        Back home
      </Link>
    </main>
  );
}
