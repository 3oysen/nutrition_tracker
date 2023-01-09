import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

export default function RightPanel() {
	return (
		<>
			<div className="right-panel">
				<ImageSlider slides={SliderData} />
			</div>
		</>
	);
}
