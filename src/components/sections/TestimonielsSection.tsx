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
                 pt-[83px] pr-[63px] pb-[40px] pl-[63px]
                 w-[587px] flex flex-col flex-shrink-0 snap-center"
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full -mt-12 mb-4 object-cover
                   shadow-[0_18px_34px_0_rgba(218,154,59,0.2)]"
      />

      <p className="text-gray-600 text-sm mb-4">{testimonial.text}</p>

      <hr className="border-t border-gray-200 my-4 w-full" />

      <div className="flex justify-between items-center w-full">
        <div className="text-left">
          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>

        <div className="text-yellow-400 flex">
          <svg width="100" height="21" viewBox="0 0 100 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2862 2.71329C9.50972 2.02023 10.4903 2.02023 10.7138 2.71329L12.0656 6.90474C12.1657 7.21513 12.4549 7.42525 12.781 7.42454L17.185 7.41491C17.9132 7.41332 18.2162 8.34589 17.6262 8.77264L14.0576 11.3535C13.7933 11.5446 13.6829 11.8846 13.7843 12.1945L15.1544 16.38C15.3809 17.0721 14.5876 17.6485 13.9994 17.2191L10.4422 14.6227C10.1787 14.4305 9.82126 14.4305 9.55784 14.6227L6.00056 17.2191C5.41236 17.6485 4.61907 17.0721 4.84561 16.38L6.21569 12.1945C6.31714 11.8846 6.20668 11.5446 5.94241 11.3535L2.37383 8.77264C1.78375 8.34589 2.08676 7.41332 2.81498 7.41491L7.219 7.42454C7.54513 7.42525 7.83434 7.21513 7.93444 6.90474L9.2862 2.71329Z" fill="#DA9A3B" />
            <path d="M29.2862 2.71329C29.5097 2.02023 30.4903 2.02023 30.7138 2.71329L32.0656 6.90474C32.1657 7.21513 32.4549 7.42525 32.781 7.42454L37.185 7.41491C37.9132 7.41332 38.2162 8.34589 37.6262 8.77264L34.0576 11.3535C33.7933 11.5446 33.6829 11.8846 33.7843 12.1945L35.1544 16.38C35.3809 17.0721 34.5876 17.6485 33.9994 17.2191L30.4422 14.6227C30.1787 14.4305 29.8213 14.4305 29.5578 14.6227L26.0006 17.2191C25.4124 17.6485 24.6191 17.0721 24.8456 16.38L26.2157 12.1945C26.3171 11.8846 26.2067 11.5446 25.9424 11.3535L22.3738 8.77264C21.7838 8.34589 22.0868 7.41332 22.815 7.41491L27.219 7.42454C27.5451 7.42525 27.8343 7.21513 27.9344 6.90474L29.2862 2.71329Z" fill="#DA9A3B" />
            <path d="M49.2862 2.71329C49.5097 2.02023 50.4903 2.02023 50.7138 2.71329L52.0656 6.90474C52.1657 7.21513 52.4549 7.42525 52.781 7.42454L57.185 7.41491C57.9132 7.41332 58.2162 8.34589 57.6262 8.77264L54.0576 11.3535C53.7933 11.5446 53.6829 11.8846 53.7843 12.1945L55.1544 16.38C55.3809 17.0721 54.5876 17.6485 53.9994 17.2191L50.4422 14.6227C50.1787 14.4305 49.8213 14.4305 49.5578 14.6227L46.0006 17.2191C45.4124 17.6485 44.6191 17.0721 44.8456 16.38L46.2157 12.1945C46.3171 11.8846 46.2067 11.5446 45.9424 11.3535L42.3738 8.77264C41.7838 8.34589 42.0868 7.41332 42.815 7.41491L47.219 7.42454C47.5451 7.42525 47.8343 7.21513 47.9344 6.90474L49.2862 2.71329Z" fill="#DA9A3B" />
            <path d="M69.2862 2.71329C69.5097 2.02023 70.4903 2.02023 70.7138 2.71329L72.0656 6.90474C72.1657 7.21513 72.4549 7.42525 72.781 7.42454L77.185 7.41491C77.9132 7.41332 78.2162 8.34589 77.6262 8.77264L74.0576 11.3535C73.7933 11.5446 73.6829 11.8846 73.7843 12.1945L75.1544 16.38C75.3809 17.0721 74.5876 17.6485 73.9994 17.2191L70.4422 14.6227C70.1787 14.4305 69.8213 14.4305 69.5578 14.6227L66.0006 17.2191C65.4124 17.6485 64.6191 17.0721 64.8456 16.38L66.2157 12.1945C66.3171 11.8846 66.2067 11.5446 65.9424 11.3535L62.3738 8.77264C61.7838 8.34589 62.0868 7.41332 62.815 7.41491L67.219 7.42454C67.5451 7.42525 67.8343 7.21513 67.9344 6.90474L69.2862 2.71329Z" fill="#DA9A3B" />
            <path d="M89.2862 2.71329C89.5097 2.02023 90.4903 2.02023 90.7138 2.71329L92.0656 6.90474C92.1657 7.21513 92.4549 7.42525 92.781 7.42454L97.185 7.41491C97.9132 7.41332 98.2162 8.34589 97.6262 8.77264L94.0576 11.3535C93.7933 11.5446 93.6829 11.8846 93.7843 12.1945L95.1544 16.38C95.3809 17.0721 94.5876 17.6485 93.9994 17.2191L90.4422 14.6227C90.1787 14.4305 89.8213 14.4305 89.5578 14.6227L86.0006 17.2191C85.4124 17.6485 84.6191 17.0721 84.8456 16.38L86.2157 12.1945C86.3171 11.8846 86.2067 11.5446 85.9424 11.3535L82.3738 8.77264C81.7838 8.34589 82.0868 7.41332 82.815 7.41491L87.219 7.42454C87.5451 7.42525 87.8343 7.21513 87.9344 6.90474L89.2862 2.71329Z" fill="#F5F5F5" />
          </svg>

        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 px-6 pl-6">
      <div className="max-w-6xl mx-auto text-center mb-18">
        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FCF3EA] text-[#F89938] font-bold px-6 py-3 w-[161px] text-sm mb-6">
          <span>Testimonials</span>
        </button>

        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Valued Customers Share<br /> Their Stories
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
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
