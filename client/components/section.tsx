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

DynamicComponent.displayName = 'DynamicComponent';

export default function Section({ id, title, subtitle }: SectionProps) {
    return (
        <section id={id} className={`min-h-screen w-screen flex flex-col items-center justify-center`}>
            <div className="w-full flex flex-col justify-center">
                <div className=''>
                    <h2 className="text-5xl font-bold mb-4">{title}</h2>
                    {subtitle && <h3 className="text-2xl font-semibold mb-4">{subtitle}</h3>}
                </div>

                <DynamicComponent id={id} />
            </div>
        </section>
    );
}


// <div className="min-h-[75vh] flex items-center justify-center">
// <div className='h-auto text-centre flex flex-col items-center justify-center'>
//     <h2 className="text-5xl font-bold mb-4">Something title title</h2>
//     <h3 className="text-2xl font-semibold mb-4">Restoration of Downsview as Blue and Green Infrastructure</h3>
// </div>
// </div>