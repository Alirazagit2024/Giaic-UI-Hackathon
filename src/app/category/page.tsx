import React from "react";
import Image from "next/image";
import sell1 from "@/app/assets/sell1.png";
import sell2 from "@/app/assets/sell2.png";
import sell3 from "@/app/assets/sell3.png";
import sell4 from "@/app/assets/sell4.png";

const ProductList = () => {
  return (
    <div className="md:w-[1260px] mx-auto p-6 mb-40">
      <div className="flex flex-wrap">
        {/* Sidebar Filters */}
        <aside className="w-full sm:w-1/4 p-4 bg-white rounded-md shadow-md mb-6 sm:mb-0">
          <h2 className="font-semibold text-xl mb-6">Filters</h2>
          
          {/* Color Filters */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Colors</h3>
            <div className="flex space-x-2">
              <button className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: "red" }} />
              <button className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: "blue" }} />
              <button className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: "green" }} />
              <button className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: "yellow" }} />
              <button className="w-6 h-6 rounded-full border-2" style={{ backgroundColor: "black" }} />
            </div>
          </div>

          {/* Size Filters */}
          <div className="mb-6 flex flex-col">
            <h3 className="font-semibold text-lg mb-2">Size</h3>
            <button className="block border px-4 py-2 mt-2 rounded-full text-black hover:bg-black hover:text-white border-gray-300">
              Small
            </button>
            <button className="block border px-4 py-2 mt-2 rounded-full text-black hover:bg-black hover:text-white border-gray-300">
              Medium
            </button>
            <button className="block border px-4 py-2 mt-2 rounded-full text-black hover:bg-black hover:text-white border-gray-300">
              Large
            </button>
            <button className="block border px-4 py-2 mt-2 rounded-full text-black hover:bg-black hover:text-white border-gray-300">
              X-Large
            </button>
          </div>

          <button className="w-full bg-black border border-black text-white py-2 rounded-md hover:bg-white hover:text-black">Apply Filters</button>
        </aside>

        {/* Product List Section */}
        <main className="w-full sm:w-3/4 p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Casual Wear</h2>
            <select className="border px-4 py-2 rounded-lg cursor-pointer">
              <option>Most Popular</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product 1 */}
            <div className="border p-4 rounded-lg flex flex-col items-center bg-white shadow-md hover:shadow-xl">
              <Image src={sell1} alt="Gradient Graphic T-shirt" className="w-full h-48 object-contain mb-4 rounded-md" />
              <h3 className="font-semibold text-lg text-center mb-2">Gradient Graphic T-shirt</h3>
              <div className="text-center mb-2">
                <span className="text-lg font-bold text-black">$145</span>
              </div>
              <div className="flex justify-center items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">☆</span>
                <span className="ml-2 text-gray-500">(3.5)</span>
              </div>
              <button className="mt-4 px-6 py-2 bg-black border border-black text-white rounded-md hover:bg-white hover:text-black">
                Add to Cart
              </button>
            </div>

            {/* Product 2 */}
            <div className="border p-4 rounded-lg flex flex-col items-center bg-white shadow-md hover:shadow-xl">
              <Image src={sell2} alt="Polo with Tipping Details" className="w-full h-48 object-contain mb-4 rounded-md" />
              <h3 className="font-semibold text-lg text-center mb-2">Polo with Tipping Details</h3>
              <div className="text-center mb-2">
                <span className="text-lg font-bold text-black">$180</span>
              </div>
              <div className="flex justify-center items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">☆</span>
                <span className="ml-2 text-gray-500">(4.5)</span>
              </div>
              <button className="mt-4 px-6 py-2 bg-black border border-black text-white rounded-md hover:bg-white hover:text-black">
                Add to Cart
              </button>
            </div>

            {/* Product 3 */}
            <div className="border p-4 rounded-lg flex flex-col items-center bg-white shadow-md hover:shadow-xl">
              <Image src={sell3} alt="Black Striped T-shirt" className="w-full h-48 object-contain mb-4 rounded-md" />
              <h3 className="font-semibold text-lg text-center mb-2">Black Striped T-shirt</h3>
              <div className="text-center mb-2">
                <span className="text-lg font-bold text-black">
                  <span className="line-through text-gray-500 mr-2">$160</span>
                  $120
                </span>
              </div>
              <div className="flex justify-center items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="ml-2 text-gray-500">(5.0)</span>
              </div>
              <button className="mt-4 px-6 py-2 bg-black border border-black text-white rounded-md hover:bg-white hover:text-black">
                Add to Cart
              </button>
            </div>

            {/* Product 4 */}
            <div className="border p-4 rounded-lg flex flex-col items-center bg-white shadow-md hover:shadow-xl">
              <Image src={sell4} alt="Skinny Fit Jeans" className="w-full h-48 object-contain mb-4 rounded-md" />
              <h3 className="font-semibold text-lg text-center mb-2">Skinny Fit Jeans</h3>
              <div className="text-center mb-2">
                <span className="text-lg font-bold text-black">
                  <span className="line-through text-gray-500 mr-2">$260</span>
                  $240
                </span>
              </div>
              <div className="flex justify-center items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">☆</span>
                <span className="ml-2 text-gray-500">(3.6)</span>
              </div>
              <button className="mt-4 px-6 py-2 bg-black border border-black text-white rounded-md hover:bg-white hover:text-black">
                Add to Cart
              </button>
            </div>

            {/* Product 5 */}
            <div className="border p-4 rounded-lg flex flex-col items-center bg-white shadow-md hover:shadow-xl">
              <Image src={sell1} alt="Checkered Shirt" className="w-full h-48 object-contain mb-4 rounded-md" />
              <h3 className="font-semibold text-lg text-center mb-2">Checkered Shirt</h3>
              <div className="text-center mb-2">
                <span className="text-lg font-bold text-black">$180</span>
              </div>
              <div className="flex justify-center items-center mb-2">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">☆</span>
                <span className="ml-2 text-gray-500">(4.3)</span>
              </div>
              <button className="mt-4 px-6 py-2 bg-black border border-black text-white rounded-md hover:bg-white hover:text-black">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Pagination (Static) */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
            <button className="border px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 mb-4 sm:mb-0">
              Previous
            </button>
            <div className="flex space-x-2 mb-4 sm:mb-0">
              <button className="border px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                1
              </button>
              <button className="border px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                2
              </button>
              <button className="border px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                3
              </button>
              <button className="border px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                4
              </button>
              <button className="border px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                5
              </button>
            </div>
            <button className="border px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
