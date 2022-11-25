import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const ProductCard = ({ product }) => {
  const {
    _id,
    productName,
    image,
    category,
    orginalPrice,
    resalePrice,
    condition,
    purchaseYear,
    yearsUsed,
    sellerName,
    sellerMobile,
    sellerLocation,
    Description,
    postedTime,
    sellerEmail,
  } = product;

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto text-blue-700">{productName}</h2>
          <hr />
          <h3 className="text-red-800 text-xl text-bolder">
            USD {resalePrice}
          </h3>
          <h5 className="text-purple-800 text-[15px] mb-3">
            <span className="text-green-800">Seller:</span> {sellerName}
          </h5>
          <p className="text-sky-700 text-bold text-[17px]">{Description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
            <div className="bg-purple-100 p-2 md:pl-6 text-[16px]">
              <p>
                {" "}
                <span className="text-bold  text-red-600">Orginal Price: </span>
                {orginalPrice}
              </p>
              <p>
                {" "}
                <span className="text-bold  text-red-600">Resale Price: </span>
                {resalePrice}
              </p>
              <p>
                {" "}
                <span className="text-bold  text-red-600">Condition: </span>
                {condition}
              </p>
              <p>
                {" "}
                <span className="text-bold  text-red-600">
                  Purchased Year:{" "}
                </span>
                {purchaseYear}
              </p>
              <p>
                {" "}
                <span className="text-bold  text-red-600">Years Used: </span>
                {yearsUsed}
              </p>
            </div>
            <div className="bg-sky-200 p-2 md:pl-6 text-[16px]">
              <p>
                {" "}
                <span className="text-bold  text-purple-600">
                  Seller Mobile:{" "}
                </span>
                {sellerMobile}
              </p>
              <p>
                {" "}
                <span className="text-bold  text-purple-600">Location: </span>
                {sellerLocation}
              </p>
              <p>
                {" "}
                <span className="text-bold  text-purple-600">
                  Seller Email:{" "}
                </span>
                {sellerEmail}
              </p>
              <p>
                {" "}
                <span className="text-bold  text-purple-600">
                  Date added to the store:{" "}
                </span>
                {postedTime}
              </p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <PrimaryButton>Book Now</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;