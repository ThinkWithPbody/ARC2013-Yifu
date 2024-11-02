import ImageOverlay from '../../components/image_overlay';

export default function Scenario() {
    const images = [
        { src: "/sections/Scenario/Districts/Districts Line.png", title: "Districts Line", description: "Description for Districts where asjd a asja jfgsajijg; ad kdklf;asfd" },
        { src: "/sections/Scenario/Districts/Districts Number.png", title: "Districts Number", description: "" },
        { src: "/sections/Scenario/GIS/Centerline.png", title: "Centerline", description: "" },
        { src: "/sections/Scenario/GIS/Contour.png", title: "Contour", description: "" },
        { src: "/sections/Scenario/GIS/Existing Massing.png", title: "Existing Massing", description: "" },
        { src: "/sections/Scenario/GIS/Hydro.png", title: "Hydro", description: "" },
    ];

    return <ImageOverlay images={images} />;
}