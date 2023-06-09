import React, { useState } from "react";
import "../Styles/CartView.css";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cartProducts")) || []);

  const removeCartProducts = () => {
    localStorage.removeItem("cartProducts");
    setCartProducts([]);
  }

  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <div>
      {cartProducts.map((product) => {
        return (
          <>
          
          <div className="boxes justify-between mt-10 mb-10 mr-20 ml-16 bg-white p-6 sm:flex sm:justify-start">
          {/* <img src= /> */}
          <div className=" mb-3 sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-3 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
              <p className="mt-1 text-xs text-gray-700">{product.typeProduct}</p>
            </div>
            <div className="mt-4 mr-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
        
              <div className="flex items-center space-x-4">
                <p className="text-sm">{product.price}</p>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> */}
              </div>
            </div>
          </div>
          
        </div>
        
          </>
          
        )
      })}

      <button className=" ml-16 mb-10 w-36 mt-3 rounded-md bg-blue-500 py-1.5 bg-orange font-medium text-blue-50 hover:bg-blue-600" onClick={() => removeCartProducts()}>Clear cart</button>
      <div className=" ml-16 mt-6 h-full border bg-white p-6 md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">{totalPrice}</p>
        </div>
        <hr className="my-4" />
        <div className="TotalBorder flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">{totalPrice}</p>
            <p className="text-sm text-gray-700">including VAT</p>
            
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 bg-orange py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        
      </div>
    </div>
  )
}
 
export default Cart
