import React, { useEffect, useRef, useState } from "react";
import "./Video.css";

interface Props {
	src: string;
	duration: number;
}

export default function Video({ src, duration }: Props) {

	const [time, setTime] = useState(0);
	const [playing, setPlaying] = useState(false);

	useEffect(() => {
		const video = document.getElementById("video-player") as HTMLVideoElement;
		const slider = document.getElementById("video-slider") as HTMLInputElement;

		video.addEventListener("timeupdate", (e) => {
			let timeCurrent = (100 / video.duration) * video.currentTime;
			setTime(Math.round(video.currentTime));
			slider.value = `${timeCurrent}`;
		});

		slider.addEventListener("change", (e) => {
			let sliderValue: number = +slider.value;
			let currentTime = sliderValue / (100 / video.duration);
			video.currentTime = currentTime;
		});
	}, [])

	useEffect(() => {
		const video = document.getElementById("video-player") as HTMLVideoElement;
		if (video) {
			if (!playing) {
				video.pause();
			} else {
				video.play();
			}
		}
	}, [playing])

	return (
		<div id="video-container">
			<video id="video-player" src={src}></video>
			<div id="video-controls">
				<div className="video-controls-background"></div>
				<button className="video-button video-control">
					<img src="./assets/images/logo-icon.svg" alt="Logo" />
				</button>
				<button
					onClick={(e) => setPlaying(value => !value)}
					className="video-button video-control"
				>
					{playing ? <img src="./assets/images/pause-icon.svg" alt="Pause" /> :
						<img src="./assets/images/play-arrow-icon.svg" alt="Play-arrow" />}
				</button>
				<span className="video-control">{time}</span>
				<input id="video-slider" className="video-control" type="range" />
				<span className="video-control">{duration}</span>
				<button className="video-button video-control">
					<img src="./assets/images/settings-icon.svg" alt="Settings" />
				</button>
				<button className="video-button video-control">
					<img src="./assets/images/fullscreen-icon.svg" alt="Fullscreen" />
				</button>
				<button className="video-button always-present">
					<img src="./assets/images/volumeoff-icon.svg" alt="Volumeoff" />
				</button>
			</div>
		</div>
	);
}