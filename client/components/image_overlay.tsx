import Image from 'next/image';

interface ImageOverlayProps {
    images: {
        src: string;
        title: string;
        description?: string;
    }[];
}

export default function ImageOverlay({ images }: ImageOverlayProps) {
    return (
        <div className="">
            {images.map((image, index) => (
                <div key={index} className="relative flex flex-row">
                    <div className="basis-4/5 flex items-center justify-center">
                        <Image 
                            src={image.src} 
                            alt={image.title} 
                            className="max-h-[100vh] w-auto object-contain" 
                            layout="intrinsic"
                            width={500} // Adjust width as needed
                            height={500} // Adjust height as needed
                        />
                    </div>
                    <div className="basis-1/5 flex items-center justify-center">
                        <div className="w-full bg-black text-white p-8 -ml-16">
                            <h3 className="text-3xl font-bold mb-4">{image.title}</h3>
                            {image.description && <p className="text-lg">{image.description}</p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
