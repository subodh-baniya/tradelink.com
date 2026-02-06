import React, { useState } from "react";
import defaultUser from '../assets/default-avatar.jpg';
const ProductPopup = ({ product, isOpen, onClose, onBuy, isOwner }) => {
  const [imageError, setImageError] = useState(false);
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center pl-[90px] z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-5xl w-full shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Left Side - Image */}
          <div className="w-full md:w-[45%] h-96 md:h-auto bg-gray-200 overflow-hidden flex items-center justify-center">
            {!imageError && product.image ? (
              <img
                src={product.image}
                alt={product.item_name}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="text-gray-400">No image available</div>
            )}
          </div>

          {/* Right Side - Details */}
          <div className="w-full md:w-[55%] p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">{product.item_name}</h2>
            <div>
              <span className="text-3xl font-semibold text-indigo-600">Rs. {product.price}</span>
            </div>

            {product.description && (
              <div className="flex flex-col gap-2">
                <label className="text-base font-medium text-gray-800">Description</label>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </div>
            )}

            {/* Seller Information */}
            {product.owner && (
              <div className="flex flex-col gap-2 border-t pt-4">
                <label className="text-sm text-gray-500">Seller Information</label>
                <div className="flex items-center gap-3">
                  <img
                    src={product.owner.avatar || defaultUser}
                    alt={product.owner.username}
                    className="h-12 w-12 rounded-full object-cover border"
                  />
                  <div>
                    <p className="text-base font-semibold">@{product.owner.username}</p>
                    <p className="text-xs text-gray-500">{product.owner.email}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {isOwner ? (
                <div className="flex-1 py-3 px-6 bg-gray-100 text-gray-500 text-center rounded-xl font-semibold border italic">
                  This is your listing
                </div>
              ) : (
                <button
                  onClick={onBuy}
                  className="flex-1 py-3 px-6 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition cursor-pointer shadow-md active:scale-95"
                >
                  Buy Now
                </button>
              )}
              
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;