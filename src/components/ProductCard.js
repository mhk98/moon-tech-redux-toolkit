import React from "react";
import { BiListPlus } from "react-icons/bi";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div
      className="relative shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
      key={product._id}
    >
      {pathname.includes("cart") && (
        <div className="bg-indigo-500 text-white p-1 rounded-full w-8 h-8 absolute right-2 text-center">
          <p>{product.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return <li className="text-sm ">{feature}</li>;
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname.includes("cart") && (
          <button
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            // onClick={() => dispatch(removeFromCart(product))}
          >
            <MdDeleteForever /> Delete
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

// import React from "react";
// import { BiListPlus } from "react-icons/bi";
// import { MdDeleteForever } from "react-icons/md";
// import { useDispatch } from "react-redux";

// // import {
// //   addToCart,
// //   removeFromCart,
// // } from "../redux/actionCreators/productActions";

// import { useLocation } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();
//   console.log("product__________________", product);
//   return (
//     <div
//       className="relative shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
//       key={product._id}
//     >
//       {pathname.includes("cart") && (
//         <div className="bg-indigo-500 text-white p-1 rounded-full w-8 h-8 absolute right-2 text-center">
//           <p>{product.quantity}</p>
//         </div>
//       )}
//       <div className="h-52 w-52 mx-auto">
//         <img src={product.image} alt={product.model} />
//       </div>
//       <h1 className="font-bold text-center">{product.model}</h1>
//       <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
//       <div className=" flex-1">
//         <ul className="space-y-2">
//           {product.keyFeature.map((feature) => {
//             return <li className="text-sm ">{feature}</li>;
//           })}
//         </ul>
//       </div>
//       <div className="flex gap-2 mt-5">
//         {pathname.includes("cart") && (
//           <button
//             className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
//             // onClick={() => dispatch(removeFromCart(product))}
//           >
//             <MdDeleteForever />
//           </button>
//         )}
//         {!pathname.includes("cart") && (
//           <button
//             className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
//             // onClick={() => dispatch(addToCart(product))}
//           >
//             Add to cart
//           </button>
//         )}
//         {!pathname.includes("cart") && (
//           <button
//             title="Add to wishlist"
//             className="bg-indigo-500  py-1 px-2 rounded-full"
//           >
//             <BiListPlus className="text-white" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
