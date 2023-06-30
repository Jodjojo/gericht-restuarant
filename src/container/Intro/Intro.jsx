import React, { useState } from "react";

// responsible for the pausing and playing of videos
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
	// setting the usestate of the video using react
	const [playVideo, setPlayVideo] = React.useState(false);
	// React tool - handy for keeping any mutable value around similar to how you’d use instance fields in classes.

	const vidRef = React.useRef();

	// to toggle if the previous play video is true or false
	const handleVideo = () => {
		setPlayVideo((prevPlayVideo) => !prevPlayVideo);
	};

	return (
		<div className='app__video'>
			{/* the video tag is a self closing HTML tag used to define source of videos to be displayed */}
			<video
				src={meal}
				ref={vidRef}
				type='video/mp4'
				loop
				controls={false}
				muted
			/>
			<div className='app__video-overlay flex__center'>
				<div
					className='app__video-overlay_circle flex__center'
					onClick={handleVideo}
				></div>
			</div>
		</div>
	);
};

export default Intro;
