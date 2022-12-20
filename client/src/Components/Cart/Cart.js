import React from "react";
import "./Cart.scss";
import DeleteOutlidedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
			title: "Long Sleeve Graphic T-shirt",
			isNew: true,
			oldPrice: 19,
			desc: "How it's done now. From the basics to advanced topics with simple, but detailed explanations.",
			price: 12,
		},
	];

	return (
		<div className="Cart">
			<h1>Products</h1>
			{data?.map((item) => {
				return (
					<div className="item" key={item.id}>
						<img src={item.img} alt="" />
						<div className="details">
							<h1>{item.title}</h1>
							<p>{item.desc?.substring(0, 70)}</p>
							<div className="price">1 x ${item.price}</div>
						</div>

						<DeleteOutlidedIcon className="delete" />
					</div>
				);
			})}
			<div className="total">
				<span>SUBTOTAL</span>
				<span>$123</span>
			</div>
			<button>PROCEED TO CHECKOUT</button>
			<span className="reset">Reset Cart</span>
		</div>
	);
};

export default Cart;
