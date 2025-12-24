import React from "react";
import { IconQuote } from "@tabler/icons-react";

// Utility function for classnames
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Avatar Component
const Avatar = ({ className, children, ...props }) => (
  <div
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ author, text, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-lg border border-gray-200",
        "bg-gradient-to-b from-pink-50/50 to-pink-50/10",
        "p-4 text-start sm:p-6",
        "hover:from-pink-50/60 hover:to-pink-50/20",
        "max-w-[380px] sm:max-w-[380px]",
        "transition-colors duration-300 shadow-sm",
        className
      )}
    >
      {/* Star Rating */}
      <div>
        <div className="relative startdiv mt-1">
          <div className="flex gap-1">
            {[...Array(author.rating)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-amber-400"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <div className="relative quote">
            <IconQuote />
          </div>
        </div>

        <p className="sm:text-md mt-4 text-sm text-gray-700 leading-relaxed">
          "{text}"
        </p>
      </div>

      <div className="flex mt-8 items-center gap-3">
        <Avatar className="h-12 w-12 bg-pink-200">
          <div className="flex h-full w-full items-center justify-center text-pink-700 font-semibold text-lg">
            {author.name.charAt(0)}
          </div>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-gray-900">
            {author.name}
          </h3>
          <p className="text-sm text-gray-600">{author.role}</p>
        </div>
      </div>
    </div>
  );
};

// Main Testimonials Section Component
const TestimonialsSection = ({
  title,
  description,
  testimonials,
  className,
}) => {
  return (
    <section
      className={cn(
        "bg-gradient-to-b from-white",
        "py-12 sm:py-24 md:py-32 px-0",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight text-gray-900 sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-l">
            {description}
          </p>
        </div>

        <div className="relative flex w-full testimonial-slider flex-col items-center justify-center overflow-hidden">
          <div className="flex overflow-hidden p-2 gap-4 w-[90vw]">
            <div className="flex shrink-0 justify-around gap-4 animate-marquee hover:pause-animation">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    author={{
                      name: testimonial.name,
                      role: testimonial.role,
                      rating: testimonial.rating,
                    }}
                    text={testimonial.quote}
                  />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-white sm:block" />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 1rem)); }
        }
        
        .animate-marquee {
          animation: marquee 240s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

// Demo Component with Jasmine Beauty Parlor testimonials
export default function TestimonialsSectionDemo() {
  const testimonials = [
    {
      name: "Priya Reddy",
      role: "Bride",
      quote:
        "Jasmine Beauty Parlor made my wedding day so special! The bridal makeup was absolutely stunning and lasted all day. Highly recommend their bridal packages!",
      rating: 5,
    },
    {
      name: "Lakshmi Devi",
      role: "Regular Customer",
      quote:
        "I love the hygiene standards here. The staff is so friendly and the facials are amazing. Finally found my go-to beauty parlor in Ravulapalem!",
      rating: 5,
    },
    {
      name: "Swathi Kumari",
      role: "Party Makeup Client",
      quote:
        "Got my makeup done for my sister's wedding and received so many compliments! The team understands exactly what you want. Great experience!",
      rating: 5,
    },

    // ➕ New testimonials
    {
      name: "Anusha Varma",
      role: "Facial & Skincare Client",
      quote:
        "The facial was so relaxing and my skin felt fresh and glowing even after two days. Very professional service.",
      rating: 4,
    },
    {
      name: "Sravani Rao",
      role: "Engagement Makeup Client",
      quote:
        "Loved the subtle makeup look they gave me for my engagement. Exactly what I asked for!",
      rating: 5,
    },
    {
      name: "Divya Sri",
      role: "Hair Spa Client",
      quote:
        "My hair feels so smooth and healthy after the hair spa. Definitely coming back again.",
      rating: 4,
    },
    {
      name: "Padma Latha",
      role: "Regular Customer",
      quote:
        "Clean environment, polite staff, and great service. One of the best parlors in this area.",
      rating: 5,
    },
    {
      name: "Keerthana Naidu",
      role: "Threading & Waxing Client",
      quote:
        "Threading was quick and painless. The staff makes you feel very comfortable.",
      rating: 4,
    },
    {
      name: "Bhavani Priya",
      role: "Bridal Trial Client",
      quote:
        "The bridal trial helped me feel confident for my big day. They really listen to your preferences.",
      rating: 5,
    },
    {
      name: "Manasa Reddy",
      role: "Party Makeup Client",
      quote:
        "Perfect makeup for a family function. Long-lasting and elegant look.",
      rating: 5,
    },
    {
      name: "Sushma Devi",
      role: "Facial Client",
      quote:
        "Affordable pricing with quality service. My skin feels much better now.",
      rating: 4,
    },
    {
      name: "Harshitha Chowdary",
      role: "Hair Styling Client",
      quote:
        "Loved the hairstyle they did for me. It stayed perfect throughout the event.",
      rating: 5,
    },
    {
      name: "Renuka Amma",
      role: "Senior Customer",
      quote:
        "Very respectful staff and calm atmosphere. Felt relaxed throughout the service.",
      rating: 4,
    },
  ];

  return (
    <TestimonialsSection
      title="What Our Clients Say"
      description="Join hundreds of satisfied customers who trust Jasmine Beauty Parlor for their beauty needs"
      testimonials={testimonials}
    />
  );
}
