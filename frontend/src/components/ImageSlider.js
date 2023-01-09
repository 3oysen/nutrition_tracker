import { useState, useEffect } from "react";

function importAll(r) {
	return r.keys().map(r);
}

const ImageSlider = () => {
	const images = importAll(
		require.context("../images/login", false, /\.(png|jpe?g|svg)$/)
	);

	function getRandomItem(arr) {
		const randomIndex = Math.floor(Math.random() * arr.length);
		const item = arr[randomIndex];
		return item;
	}

	const [image, setImage] = useState(getRandomItem(images));

	useEffect(() => {
		const interval = setInterval(() => {
			setImage(getRandomItem(images));
		}, 5000);

		return () => clearInterval(interval);
	});

	console.log(image);

	return (
		<>
			<div>
				<img src={image} alt="" width="500px" />
			</div>
		</>
	);
};

export default ImageSlider;
