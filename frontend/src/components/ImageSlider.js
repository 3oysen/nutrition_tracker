import React, { useState } from "react";
import { SliderData } from "./SliderData";

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === current + 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	// setInterval(nextSlide, 1000);
	// console.log("hello");

	return (
		<>
			{SliderData.map((slide, index) => {
				return (
					<div key={index}>
						<img src={slide.image} alt="" width="300px" />
					</div>
				);
			})}
			;
		</>
	);
};

export default ImageSlider;
