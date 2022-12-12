import React from "react";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts.js";
import Slider from "../../Components/Slider/Slider.js";
import "./Home.scss";

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<FeaturedProducts type="Featured" />
			{/* <FeaturedProducts type="Trending" /> */}
		</div>
	);
};

export default Home;
