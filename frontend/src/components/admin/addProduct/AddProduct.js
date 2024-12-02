import React, { useEffect, useState } from "react";
import "./AddProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../loader/Loader";
import ProductForm from "../productForm/ProductForm";
import { getCategories } from "../../../redux/features/categoryAndBrand/categoryAndBrandSlice";

const initialState = {
  name: "",
  category: "",
  brand: "",
  quantity: "",
  color: "",
  price: "",
  regularPrice: "",
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(initialState);
  const [filteredBrands, setFilteredBrands] = useState([]);

  const { isLoading } = useSelector((state) => state.product);
  const { categories, brands } = useSelector((state) => state.category);

  const { name, category, brand, price, quantity, color, regularPrice } =
    product;

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // Filter Brands based on selectedCategory
  const filterBrands = (selectedCategory) => {
    const newBrands = brands.filter(
      (brand) => brand.category === selectedCategory
    );
    setFilteredBrands(newBrands);
  };
  useEffect(() => {
    filterBrands(category);
  }, [category]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <section>
      <div className="container">
        {isLoading && <Loader />}
        <h3 className="--mt">Add New Product</h3>
        <ProductForm
          saveProduct={saveProduct}
          product={product}
          handleInputChange={handleInputChange}
          categories={categories}
          isEditing={false}
          filteredBrands={filteredBrands}
        />
      </div>
    </section>
  );
};

export default AddProduct;
