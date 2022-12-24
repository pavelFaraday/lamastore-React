import React, { useState, useEffect } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({ type }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await axios.get(
					process.env.REACT_APP_API_URL + "/products",
					{
						headers: {
							Authorization:
								"bearer " + process.env.REACT_APP_API_TOKEN,
						},
					}
				);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="featuredProducts">
			<div className="top">
				<h1>{type} Products</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Blanditiis dolores optio rem omnis laudantium veniam?
					Molestiae illo laborum quibusdam consequatur.
				</p>
			</div>
			<div className="bottom">
				{data.map((item) => (
					<Card item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
