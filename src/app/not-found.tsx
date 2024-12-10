import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="md:w-[1260px] mx-auto flex flex-col text-center justify-center items-center h-screen bg-white from-gray-800 to-gray-900 text-black border-t border-gray-400 p-4">
      {/* 404 Message */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-xl md:text-2xl mb-6">We couldn't find the page you're looking for.</p>

      {/* Navigation Button */}
      <Link href="/">
      <button
        className="bg-black border border-black hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-full text-lg md:text-xl transition duration-300"
      >
        Go to Homepage
      </button>
      </Link>
    </div>
  );
}
