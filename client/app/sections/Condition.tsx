'use client';

interface Section {
    title: string;
    content: string[];
    image?: string;
}

export default function Condition() {
    const sections: Section[] = [
        {
            title: "Geographic Context",
            content: [
                "The Downsview area occupies an elevated position at the watershed divide between Don and Humber Rivers.",
                "This topographical positioning significantly influences local hydrology and geology.",
                "Surface water predominantly drains westward across the region."
            ],
            image: "/sections/Problem/topography.png"
        },
        {
            title: "Watershed Analysis",
            content: [
                "Black Creek, situated west of the site, exhibits signs of environmental stress.",
                "Toronto's creek restoration initiatives include Etobicoke, Mimico, Wilket, and Mud Creek systems.",
                "Current conditions indicate need for comprehensive watershed management."
            ],
            image: "/sections/Problem/watershed.png"
        },
        {
            title: "Environmental Assessment",
            content: [
                "Site analysis reveals three primary concerns:",
                "1. Surface contamination and waste accumulation",
                "2. Insufficient vegetation coverage for soil stabilization",
                "3. Creek bank deterioration in western sectors",
                "Former airport grounds exhibit poor soil water retention, contributing to localized flooding."
            ],
            image: "/sections/Problem/assessment.png"
        },
        {
            title: "Research Question",
            content: [
                "How can we restore the site to maintain the health of the creeks watersheds while housing 83,000 people?",
            ],
            image: "/sections/Problem/infrastructure.png"
        }
    ];

    return (
        <div className="min-h-screen w-full bg-slate-50">
            <div className="max-w-7xl mx-auto py-16 px-4">
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-6">Downsview Site Analysis</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Analysis of watershed preservation and urban development capacity
                    </p>
                </div>

                <div className="grid gap-16">
                    {sections.map((section, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                            <div className={`space-y-4 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <h2 className="text-3xl font-bold">{section.title}</h2>
                                <div className="space-y-2">
                                    {section.content.map((paragraph, i) => (
                                        <p key={i} className="text-gray-700 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            {section.image && (
                                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <img
                                        src={section.image}
                                        alt={`${section.title} visualization`}
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}