import { useState } from "react";

const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
    const [status, setStatus] = useState("loading");
    console.log(className);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <img
                src={status === "error" ? "error" : src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${status === "loaded" ? "opacity-100" : "opacity-0"
                    }`}
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
                
            />

            {status === "loading" && (
                <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}

            {status === "error" && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                    Failed to load
                </div>
            )}
        </div>
    );

};

export default ImageWithFallback;