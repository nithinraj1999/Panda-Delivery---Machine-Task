
const testimonials = [
  {
    name: "Dianne Russell",
    role: "CEO, Let's Connect",
    image: "/images/user1.jpg", 
    text: "I was very impressed with Quick Cargo’s speed of delivery and timeliness. They’re proactive in safety and provide exceptional customer service. Highly recommend them to any business partners.",
    rating: 5,
  },
  {
    name: "Dianne Russell",
    role: "CEO, Let's Connect",
    image: "/images/user2.jpg",
    text: "Our experience with [Company Name] has been wonderful. Their real-time tracking system gives us certainty and peace of mind. Can always rely on them for our cargo delivery, regardless of complexity.",
    rating: 5,
  },
  {
    name: "Dianne Russell",
    role: "CEO, Let's Connect",
    image: "/images/user3.jpg",
    text: "Our experience with [Company Name] has been wonderful. Their real-time tracking system gives us certainty and peace of mind. Can always rely on them for our cargo delivery, regardless of complexity.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-white rounded-2xl border-1 border-[#E4DDDD] p-6 flex flex-col items-center text-center w-full max-w-sm">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full -ml-65 -mt-15 mb-4 object-cover "
      />
      <p className="text-gray-600 text-sm mb-4">{testimonial.text}</p>
      <div className="text-yellow-400 flex mb-2">
        {Array.from({ length: testimonial.rating }).map((_, idx) => (
          <svg
            key={idx}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.045 9.384c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
      </div>
      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
      <p className="text-gray-400 text-sm">{testimonial.role}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-18">
                   
  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FCF3EA] text-[#F89938] font-bold px-6 py-3 w-[161px] text-sm mb-6">
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 4.14294V8.14294C15 8.27555 14.9474 8.40273 14.8536 8.4965C14.7598 8.59027 14.6326 8.64294 14.5 8.64294C14.3674 8.64294 14.2402 8.59027 14.1465 8.4965C14.0527 8.40273 14 8.27555 14 8.14294V5.34982L8.85378 10.4967C8.80735 10.5432 8.7522 10.5801 8.6915 10.6052C8.63081 10.6304 8.56574 10.6433 8.50003 10.6433C8.43433 10.6433 8.36926 10.6304 8.30856 10.6052C8.24786 10.5801 8.19272 10.5432 8.14628 10.4967L6.00003 8.34982L1.85378 12.4967C1.75996 12.5905 1.63272 12.6432 1.50003 12.6432C1.36735 12.6432 1.2401 12.5905 1.14628 12.4967C1.05246 12.4029 0.999756 12.2756 0.999756 12.1429C0.999756 12.0103 1.05246 11.883 1.14628 11.7892L5.64628 7.28919C5.69272 7.24271 5.74786 7.20583 5.80856 7.18066C5.86926 7.1555 5.93433 7.14255 6.00003 7.14255C6.06574 7.14255 6.13081 7.1555 6.1915 7.18066C6.2522 7.20583 6.30735 7.24271 6.35378 7.28919L8.50003 9.43607L13.2932 4.64294H10.5C10.3674 4.64294 10.2402 4.59027 10.1465 4.4965C10.0527 4.40273 10 4.27555 10 4.14294C10 4.01034 10.0527 3.88316 10.1465 3.78939C10.2402 3.69562 10.3674 3.64294 10.5 3.64294H14.5C14.6326 3.64294 14.7598 3.69562 14.8536 3.78939C14.9474 3.88316 15 4.01034 15 4.14294Z"
        fill="#F89938"
      />
    </svg>
    <span>Testimonials</span>
  </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Valued Customers Share<br/> Their Stories</h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} testimonial={t} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
