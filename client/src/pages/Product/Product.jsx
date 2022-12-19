import React, { useState } from "react";
import "./Product.scss";
import AddShoppinaCarticon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Balancelcon from "@mui/icons-material/Balance";

const Product = () => {
	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const images = [
		"https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
		"https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
		"https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	];

	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img
						src={images[0]}
						alt=""
						onClick={(e) => setSelectedImg(0)}
					/>
					<img
						src={images[1]}
						alt=""
						onClick={(e) => setSelectedImg(1)}
					/>
					<img
						src={images[2]}
						alt=""
						onClick={(e) => setSelectedImg(2)}
					/>
				</div>
				<div className="mainImg">
					<img src={images[selectedImg]} alt="" />
				</div>
			</div>
			<div className="right">
				<h1>Title</h1>
				<span className="price">$199</span>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Natus quam placeat sed ipsam dolorem. Aliquam voluptate
					asperiores illo odio eum.
				</p>
				<div className="quantity">
					<button onClick={() => setQuantity((prev) => prev + 1)}>
						+
					</button>
					<span>{quantity}</span>
					<button
						onClick={() =>
							setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
						}
					>
						-
					</button>
				</div>
				<button className="add">
					<AddShoppinaCarticon /> ADD TO CART
				</button>
				<div className="links">
					<div className="item">
						<FavoriteBorderIcon /> ADD TO WISH LIST
					</div>
					<div className="item">
						<Balancelcon /> ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Men, Top</span>
				</div>
				<hr />
				<div className="info">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
