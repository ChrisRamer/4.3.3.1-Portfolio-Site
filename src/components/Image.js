import React from "react";
import PropTypes from "prop-types";
import images from "./../img/index.js";

function Image(props) {

	function getImage() {
		switch (props.misses) {
			case 0:
				return images.image0;
			case 1:
				return images.image1;
			case 2:
				return images.image2;
			case 3:
				return images.image3;
			case 4:
				return images.image4;
			case 5:
				return images.image5;
			default:
				return images.image6;
		}
	}

	return (
		<React.Fragment>
			<div className="image">
				<img src={getImage()} alt={`You have made ${props.misses} incorrect guesses}`} />
			</div>
		</React.Fragment>
	)
}

Image.propTypes = {
	misses: PropTypes.number
}

export default Image;