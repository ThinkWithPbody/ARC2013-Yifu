interface Section {
    id: string;
    title: string;
}

interface HeaderProps {
    sections: Section[];
    show: boolean;
}

export default function Header({ sections, show }: HeaderProps) {
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 bg-white transition-transform duration-300 z-50 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="container mx-auto px-4 py-2">
                <ul className="flex justify-center space-x-8">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a href={`#${section.id}`} onClick={(e) => handleClick(e, section.id)} className="text-black text-lg font-bold hover:text-blue-800" style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)' }}>
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}