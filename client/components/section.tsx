import dynamic from 'next/dynamic';
import { memo } from 'react';

interface SectionProps {
    id: string;
    title: string;
    subtitle?: string;
}

const DynamicComponent = memo(({ id }: { id: string }) => {
    const Component = dynamic(() => import(`../app/sections/${id}`), {
        loading: () => <p>Loading...</p>,
        ssr: false, // Ensure it's only rendered on the client side
    });
    return <Component />;
});

export default function Section({ id, title, subtitle }: SectionProps) {
    return (
        <section id={id} className={`min-h-screen w-screen flex items-center justify-center`}>
            <div className="w-full text-center">
                <div className='my-[50vh]'>
                    <h2 className="text-5xl font-bold mb-4">{title}</h2>
                    {subtitle && <h3 className="text-2xl font-semibold mb-4">{subtitle}</h3>}
                </div>

                <DynamicComponent id={id} />
            </div>
        </section>
    );
}