
import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Next.js Template</h1>
        <nav>
            <ul className="flex gap-4">
            <li>
                <Link href="/">
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                <a>About</a>
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    }