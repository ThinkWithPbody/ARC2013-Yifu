'use client'
import Header from '../components/header';
import Section from '../components/section';
import { useEffect, useState } from 'react';

export default function Home() {
    const [showHeader, setShowHeader] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShowHeader(false);
            } else if (currentScrollY <= 0) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        // Hide the header initially
        setShowHeader(false);
    }, []);

    const sections = [
        { id: 'History', title: 'History', subtitle: 'A look into the past' },
        { id: 'Condition', title: 'Condition', subtitle: 'Downsview analysis' },
        { id: 'Precedent', title: 'Precedent', subtitle: 'Historical examples' },
        { id: 'Scenario', title: 'Scenario', subtitle: 'Future possibilities' },
    ];

    return (
        <div className="min-h-screen">
            <Header sections={sections} show={showHeader} />
            <main className="">
                {sections.map((section) => (
                    <Section key={section.id} id={section.id} title={section.title} subtitle={section.subtitle} />
                ))}
            </main>
        </div>
    );
}
