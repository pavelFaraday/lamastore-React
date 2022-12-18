import React from "react";
import Categories from "../../Components/Categories/Categories.js";
import Contact from "../../Components/Contact/Contact.js";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts.js";
import Slider from "../../Components/Slider/Slider.js";
import "./Home.scss";

const Home = () => {
	return (
		<div className="home">
			<Slider />
			<FeaturedProducts type="Featured" />
			<Categories />
			<FeaturedProducts type="Trending" />
			<Contact />
		</div>
	);
};

export default Home;
