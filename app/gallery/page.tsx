export default function GalleryPage() {
    // Example data: each photo has a file + location
    const photos = [
        {
            src: "/photos/shibuya.jpg",
            location: "Tokyo, Japan",
        },
        {
            src : "/photos/depresif.jpg",
            location: "Istanbul, Turkey",
        },
        {
            src: "/photos/bridge.jpg",
            location: "Nagato, Japan",
        },
        {
            src: "/photos/bogaz.jpg",
            location: "Istanbul, Turkey",
        },
        {
            src: "/photos/kedi.jpg",
            location: "Istanbul, Turkey",
        },
        {
            src: "/photos/yamaguchi.jpg",
            location: "Yamaguchi, Japan",
        },
        {
            src: "/photos/halic.jpg",
            location: "Halic, Turkey",
        },
        {
            src: "/photos/kadikoy.jpg",
            location: "Kadikoy, Turkey",
        },
        {
            src : "/photos/kedi2.jpg",
            location: "Istanbul, Turkey",
        },
        {
            src : "/photos/kyoto.jpg",
            location: "Kyoto, Japan",
        },
        {
            src : "/photos/kapalicarsi.jpg",
            location: "Kapalicarsi, Turkey",
        },
        {
            src : "/photos/kamakura.jpg",
            location: "Kamakura, Japan",
        },
        {
            src : "/photos/eminonu.jpg",
            location: "Eminonu, Turkey",
        }
    ];

    return (
        <section className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-4xl font-extrabold mb-6 text-textPrimary">
                My Photo Gallery
            </h1>
            <p className="text-lg text-textSecondary mb-8">
                A collection of moments I’ve captured through my lens.
            </p>

            <div className="space-y-8">
                {photos.map((photo, idx) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-md border border-border hover:border-accent transition-colors"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={photo.src}
                            alt={`Photo ${idx + 1}`}
                            className="w-full object-cover"
                        />
                        <p className="text-sm text-textSecondary p-2 border-t border-border text-right">
                            {photo.location}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
