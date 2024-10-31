import Link from 'next/link';

export default function Header({ sections, show }) {
  return (
    <header className={`fixed top-0 left-0 right-0 bg-white shadow-md transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="container mx-auto px-4 py-2">
        <ul className="flex space-x-4">
          {sections.map((section) => (
            <li key={section.id}>
              <Link href={`#${section.id}`} className="text-blue-600 hover:text-blue-800">
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}