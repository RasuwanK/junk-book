import { Martian_Mono } from "@next/font/google"
import Link from "next/link";

const martianFont = Martian_Mono({weight: ["400"], subsets: ["latin"]});

export default function Navbar() {
  return (
    <nav className={martianFont.className}>
        <h1 className="text-3xl">The Junk Book</h1>
        <Link href="/add-junk">Add Junk</Link>
    </nav>
  )
}
