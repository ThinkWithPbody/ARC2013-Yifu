import dynamic from 'next/dynamic';
import { Suspense } from 'react';

interface SectionProps {
    id: string;
    title: string;
}

export default function Section({ id, title }: SectionProps) {
    const DynamicComponent = dynamic(() => import(`../app/sections/${id}`), {
        loading: () => <p>Loading...</p>,
        ssr: false, // Ensure it's only rendered on the client side
    });

    return (
        <section id={id} className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <DynamicComponent />
            </div>
        </section>
    );
}