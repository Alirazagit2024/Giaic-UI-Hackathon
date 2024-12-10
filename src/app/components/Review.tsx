import Image from 'next/image';
import React from "react";

export default function Review() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        {/* Tabs Section */}
        <div className="mb-8 flex justify-center">
          <div className="flex gap-8 border-b border-gray-300 pb-2">
            <button className="text-gray-500 hover:text-black font-semibold">
              Product Details
            </button>
            <button className="text-black font-semibold border-b-2 border-black">
              Rating & Reviews
            </button>
            <button className="text-gray-500 hover:text-black font-semibold">
              FAQs
            </button>
          </div>
        </div>

        {/* Reviews Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">All Reviews (451)</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-gray-500 hover:text-black">
              <span>Latest</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.086l3.293-3.379a1 1 0 011.414 1.415l-4 4.083a1 1 0 01-1.414 0l-4-4.083a1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Review Card */}
          {[
            {
              name: "Samantha D.",
              date: "August 14, 2023",
              rating: 5,
              comment:
                "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to t-shirt.",
            },
            {
              name: "Alex M.",
              date: "August 15, 2023",
              rating: 5,
              comment:
                "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
            },
            {
              name: "Ethan R.",
              date: "August 16, 2023",
              rating: 5,
              comment:
                "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
            },
            {
              name: "Olivia P.",
              date: "August 17, 2023",
              rating: 5,
              comment:
                "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
            },
            {
              name: "Liam K.",
              date: "August 18, 2023",
              rating: 5,
              comment:
                "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. I'll be wearing a piece of art that reflects my passion for both design and fashion.",
            },
            {
              name: "Ava H.",
              date: "August 19, 2023",
              rating: 5,
              comment:
                "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="h-full bg-gray-100 p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
              <Image
  alt="testimonial"
  src="https://dummyimage.com/100x100"
  width={100}  // Add the width for the image
  height={100} // Add the height for the image
  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
/>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
              </div>
              <p className="leading-relaxed text-gray-700 mb-4">
                {review.comment}
              </p>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-gray-200 text-black px-6 py-2 rounded-lg hover:bg-gray-300">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
