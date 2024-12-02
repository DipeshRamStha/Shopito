import React from "react";
import "./ProductForm.scss";
import Card from "../../card/Card";

const ProductForm = ({
  saveProduct,
  product,
  handleInputChange,
  categories,
  isEditing,
  filteredBrands,
}) => {
  return (
    <div className="add-product">
      <h3>Upload Widget Placeholder</h3>
      <Card cardClass={"card"}>
        <br />
        <form onSubmit={saveProduct}>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Product name"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />
          <label>Product Category:</label>
          <select
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          >
            {isEditing ? (
              <option value={product?.category}>{product?.category}</option>
            ) : (
              <option>select category</option>
            )}
            {categories.length > 0 &&
              categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
          </select>

          <label>Product Brand:</label>
          <select
            name="brand"
            value={product?.brand}
            onChange={handleInputChange}
          >
            {isEditing ? (
              <option value={product?.brand}>{product?.brand}</option>
            ) : (
              <option>select brand</option>
            )}
            {filteredBrands.length > 0 &&
              filteredBrands.map((brand) => (
                <option key={brand._id} value={brand.name}>
                  {brand.name}
                </option>
              ))}
          </select>

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ProductForm;
