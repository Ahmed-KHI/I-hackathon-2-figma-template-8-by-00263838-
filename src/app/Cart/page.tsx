"use client";
import React from "react";
import { AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

const page: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bag Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-[#111111] mb-6">Bag</h2>
          {["prodct1", "product-3"].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 border-b pb-4"
            >
              {/* Left Section: Image and Product Info */}
              <div className="flex items-start gap-4">
                <Image
                  src={`/images/${item}.Png`} // Adjust path if necessary
                  alt="Library Stool Chair"
                  width={150} // Specify width
                  height={150} // Specify height
                  className="rounded-md object-cover"
                />
                <div>
                  <p className="text-[#272343] font-medium">
                    Library Stool Chair
                  </p>
                  <p className="text-[#757575] mt-8 text-sm">
                    Ashen Slate/Cobalt Bliss
                  </p>
                  <p className="text-[#757575] mt-2 text-sm">
                    Size: <u>L</u> Quantity: <u>1</u>
                  </p>
                  <div className="flex items-center mt-3 gap-4 text-[#111111]">
                    <AiOutlineHeart className="w-5 h-5 cursor-pointer hover:text-red-800" />
                    <AiOutlineDelete className="w-5 h-5 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Right Section: Price and Actions */}
              <div className="mt-4 sm:mt-0 flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <p className="text-[#111111] font-medium">MRP: $99</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div>
          <h2 className="text-2xl mt-4 font-semibold text-[#111111] mb-6">
            Summary
          </h2>
          <div className="">
            <div className="flex justify-between mb-4">
              <p className="text-[#111111]">Subtotal</p>
              <p className="text-[#111111]">$198.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-[#111111]">Estimated Delivery & Handling</p>
              <p className="text-[#111111]">Free</p>
            </div>
            <div className="flex justify-between border-t border-b-2 border-gray-200 pt-4">
              <p className="text-[#111111] font-medium">Total</p>
              <p className="text-[#111111] font-medium">$198.00</p>
            </div>
            <button className="mt-6 w-full bg-[#029FAE] text-[#FFFFFF] py-3 rounded-full text-lg font-medium hover:bg-[#20929c] transition">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
