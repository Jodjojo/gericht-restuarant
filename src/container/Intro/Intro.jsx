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

		// if play video is true and then already playing then change the current video ref and then pause it on that click else we want to play it
		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
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
				>
					{/* Using the react icons we use the bspausefill if playvideo  is set to true and already playing else we use the bsfillplayfill */}
					{playVideo ? (
						<BsPauseFill color='#fff' fontSize={30} />
					) : (
						<BsFillPlayFill color='#fff' fontSize={30} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Intro;
