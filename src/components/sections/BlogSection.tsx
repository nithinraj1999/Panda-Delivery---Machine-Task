import ImageWithFallback from "../Loading/ImageFallBack";
const blogs = [
    {
        id: 1,
        title: "Exploring Iconic Structures Around the World",
        description: "Journey across continents to uncover some of the most inspiring architectural wonders.",
        image: "/images/blog1.jpg",
    },
    {
        id: 2,
        title: "Building a Greener Future Brick by Brick",
        description: "innovative design and eco-conscious principles to shape a more environmentally.",
        image: "/images/blog2.jpg",
    },
    {
        id: 3,
        title: "Transforming Historic Structure into Modern Marvels",
        description: "Old buildings are transformed into vibrant spaces while preserving their historical charm.",
        image: "/images/blog3.jpg",
    },
    {
        id: 4,
        title: "Transforming Historic Structure into Modern Marvels",
        description: "Old buildings are transformed into vibrant spaces while preserving their historical charm.",
        image: "/images/blog4.jpg",
    },
];

const BlogSection: React.FC = () => {
    return (
        <section className="bg-[#FFF8F1] py-12 font-manrope">
            <div className="w-full mx-auto px-[80px]">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <button className="flex items-center justify-center gap-2 rounded-full bg-[#FCF3EA] text-black font-semibold px-6 py-3 gap-[8px] text-sm">
                            <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 4.14294V8.14294C15 8.27555 14.9474 8.40273 14.8536 8.4965C14.7598 8.59027 14.6326 8.64294 14.5 8.64294C14.3674 8.64294 14.2402 8.59027 14.1465 8.4965C14.0527 8.40273 14 8.27555 14 8.14294V5.34982L8.85378 10.4967C8.80735 10.5432 8.7522 10.5801 8.6915 10.6052C8.63081 10.6304 8.56574 10.6433 8.50003 10.6433C8.43433 10.6433 8.36926 10.6304 8.30856 10.6052C8.24786 10.5801 8.19272 10.5432 8.14628 10.4967L6.00003 8.34982L1.85378 12.4967C1.75996 12.5905 1.63272 12.6432 1.50003 12.6432C1.36735 12.6432 1.2401 12.5905 1.14628 12.4967C1.05246 12.4029 0.999756 12.2756 0.999756 12.1429C0.999756 12.0103 1.05246 11.883 1.14628 11.7892L5.64628 7.28919C5.69272 7.24271 5.74786 7.20583 5.80856 7.18066C5.86926 7.1555 5.93433 7.14255 6.00003 7.14255C6.06574 7.14255 6.13081 7.1555 6.1915 7.18066C6.2522 7.20583 6.30735 7.24271 6.35378 7.28919L8.50003 9.43607L13.2932 4.64294H10.5C10.3674 4.64294 10.2402 4.59027 10.1465 4.4965C10.0527 4.40273 10 4.27555 10 4.14294C10 4.01034 10.0527 3.88316 10.1465 3.78939C10.2402 3.69562 10.3674 3.64294 10.5 3.64294H14.5C14.6326 3.64294 14.7598 3.69562 14.8536 3.78939C14.9474 3.88316 15 4.01034 15 4.14294Z"
                                    fill="#000000ff"
                                />
                            </svg>
                            <span>Blog</span>
                        </button>

                        <h2 className="text-5xl font-semibold text-[#003164]">See Our Latest Blogs!</h2>
                    </div>
                    <button className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-md text-sm font-medium cursor-pointer ">
                        View All →
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs.map((blog) => (
                        <div key={blog.id} className=" rounded-lg  overflow-hidden  transition">
                            <ImageWithFallback src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-[20px] font-semibold text-gray-900">{blog.title}</h3>
                                <p className="text-sm text-[#0C0D13] mt-2 font-normal">{blog.description}</p>
                                <button className=" mt-4 text-sm font-semibold text-[#0C0D13] border-b-1 py-[8px]">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
