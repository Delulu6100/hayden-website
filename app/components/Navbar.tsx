import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Achievements", href: "/achievements" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">

      {/* Logo */}

      <Link
        href="/"
        className="text-xl font-semibold tracking-tight text-white transition-colors duration-200 hover:text-gray-300"
      >
        Hayden
      </Link>

      {/* Navigation */}

      <div className="flex items-center gap-7">

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-gray-400 transition-colors duration-200 hover:text-gray-200"
          >
            {link.name}
          </Link>
        ))}

      </div>

    </nav>
  );
}