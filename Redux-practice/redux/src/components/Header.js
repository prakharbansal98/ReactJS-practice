import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("data in header", result);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: 10,
        marginTop: 10,
        gap: 2,
      }}
    >
      <div>{result.length}</div>
      <div>
        <FaCartShopping />
      </div>
    </div>
  );
};

export default Header;
