import React from "react";
import styles from "./video.module.scss";
import Container from "@/components/Container/Container";

const Video = () => {
	return (
		<Container className={styles.video}>
			<video autoPlay loop src="/home/videos/video.mp4" muted></video>
		</Container>
	);
};

export default Video;
