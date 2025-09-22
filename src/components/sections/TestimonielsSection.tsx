const testimonials = [
  {
    name: "Dianne Russell",
    role: "CEO, Let's Connect",
    image: "/images/user1.jpg",
    text:
      "I was very impressed with Quick Cargo’s speed of delivery and timeliness. They’re proactive in safety and provide exceptional customer service. Highly recommend them to any business partners.",
    rating: 5,
  },
  {
    name: "Dianne Russell",
    role: "CEO, Let's Connect",
    image: "/images/user2.jpg",
    text:
      "Our experience with [Company Name] has been wonderful. Their real-time tracking system gives us certainty and peace of mind. Can always rely on them for our cargo delivery, regardless of complexity.",
    rating: 5,
  },
  {
    name: "Dianne Russell",
    role: "CEO, Let's Connect",
    image: "/images/user3.jpg",
    text:
      "Our experience with [Company Name] has been wonderful. Their real-time tracking system gives us certainty and peace of mind. Can always rely on them for our cargo delivery, regardless of complexity.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div
      className="bg-white rounded-2xl border border-[#E4DDDD]
                 pt-20 sm:pt-24 lg:pt-[83px]
                 px-6 sm:px-10 lg:px-[63px]
                 pb-10 sm:pb-12 lg:pb-[40px]
                 w-full sm:w-[400px] lg:w-[587px]
                 flex flex-col flex-shrink-0 snap-center"
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full -mt-12 mb-4 object-cover
                   shadow-[0_18px_34px_0_rgba(218,154,59,0.2)]"
      />

      <p className="text-[#9C9C9C] font-plusjakartasans font-normal text-sm sm:text-base lg:text-[18px] mb-4">
        {testimonial.text}
      </p>

      <hr className="border-t border-gray-200 my-4 w-full" />

      <div className="flex justify-between items-center w-full">
        <div className="text-left">
          <h3 className="font-inter font-medium text-gray-900 text-sm sm:text-base lg:text-lg">
            {testimonial.name}
          </h3>
          <p className="font-plusjakartasans font-normal text-[#9C9C9C] text-xs sm:text-sm lg:text-base">
            {testimonial.role}
          </p>
        </div>

        <div className="text-yellow-400 flex">
          <svg width="100" height="21" viewBox="0 0 100 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 px-6 pl-6">
      <div className="max-w-6xl mx-auto text-center mb-18 ">
        <button className="inline-flex font-atypdisplay items-center justify-center gap-2 rounded-full bg-[#FCF3EA] text-[#F89938] font-normal px-6 py-3 w-[161px] text-sm mb-6">
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4V8C15 8.13261 14.9474 8.25979 14.8536 8.35355C14.7598 8.44732 14.6326 8.5 14.5 8.5C14.3674 8.5 14.2402 8.44732 14.1465 8.35355C14.0527 8.25979 14 8.13261 14 8V5.20687L8.85378 10.3538C8.80735 10.4002 8.7522 10.4371 8.6915 10.4623C8.63081 10.4874 8.56574 10.5004 8.50003 10.5004C8.43433 10.5004 8.36926 10.4874 8.30856 10.4623C8.24786 10.4371 8.19272 10.4002 8.14628 10.3538L6.00003 8.20687L1.85378 12.3538C1.75996 12.4476 1.63272 12.5003 1.50003 12.5003C1.36735 12.5003 1.2401 12.4476 1.14628 12.3538C1.05246 12.2599 0.999756 12.1327 0.999756 12C0.999756 11.8673 1.05246 11.7401 1.14628 11.6462L5.64628 7.14625C5.69272 7.09976 5.74786 7.06288 5.80856 7.03772C5.86926 7.01256 5.93433 6.99961 6.00003 6.99961C6.06574 6.99961 6.13081 7.01256 6.1915 7.03772C6.2522 7.06288 6.30735 7.09976 6.35378 7.14625L8.50003 9.29313L13.2932 4.5H10.5C10.3674 4.5 10.2402 4.44732 10.1465 4.35355C10.0527 4.25979 10 4.13261 10 4C10 3.86739 10.0527 3.74021 10.1465 3.64645C10.2402 3.55268 10.3674 3.5 10.5 3.5H14.5C14.6326 3.5 14.7598 3.55268 14.8536 3.64645C14.9474 3.74021 15 3.86739 15 4Z" fill="#F89938" />
          </svg>

          <span>Testimonials</span>
        </button>

        <h2 className="text-5xl font-semibold leading-[55px] text-gray-900 mb-2">
          Our Valued Customers<br />  Share Their Stories
        </h2>
        <p className="text-[#8F9092] font-normal text-base max-w-xl mx-auto leading-[160%]">
          Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </p>
      </div>

      <div className="overflow-x-auto overflow-y-visible scrollbar-hide">
        <div className="flex flex-nowrap gap-8 px-6 snap-x snap-mandatory" >
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              testimonial={t}

            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default TestimonialsSection;
