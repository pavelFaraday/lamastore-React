import React from "react";
import "./Products.scss";

const Products = () => {
	return (
		<div className="products">
			<div className="left">
				<div className="filterItem">
					<h2>Product Categories</h2>
					<div className="inputItem">
						<input type="checkbox" id="1" value={1} />
						<label htmlFor="1">Shoes</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="2" value={2} />
						<label htmlFor="2">Skirts</label>
					</div>
					<div className="inputItem">
						<input type="checkbox" id="3" value={3} />
						<label htmlFor="3">Coats</label>
					</div>
				</div>
				<div className="filterItem">
					<h2>Filter By Price</h2>
					<div className="inputItem">
						<span>0</span>
						<input type="range" min={0} max={1000} />
						<span>1000</span>
					</div>
				</div>
				<div className="filterItem">
					<h2>Sort By</h2>
					<div className="inputItem">
						<input type="radio" name="price" id="asc" value="asc" />
						<label htmlFor="asc">Lowest Price</label>
					</div>
					<div className="inputItem">
						<input type="radio" name="price" id="asc" value="asc" />
						<label htmlFor="asc">Highst Price</label>
					</div>
				</div>
			</div>
			<div className="right"></div>
		</div>
	);
};

export default Products;
