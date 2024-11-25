import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../loader/Loader";

const AddProduct = () => {
  const { isLoading } = useSelector((state) => state.product);

  return (
    <section>
      <div className="container">
        {isLoading && <Loader />}
        <h3 className="--mt">Add New Product</h3>
      </div>
    </section>
  );
};

export default AddProduct;
