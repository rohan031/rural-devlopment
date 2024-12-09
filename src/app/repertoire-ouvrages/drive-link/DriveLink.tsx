import Container from "@/components/Container/Container";
import React from "react";

interface DriveLinkProps {
	url: string;
}

const DriveLink = ({ url }: DriveLinkProps) => {
	return (
		<Container
			style={{
				display: "flex",
				gap: "1rem",
				alignItems: "center",
			}}
		>
			<h4>Check this out:</h4>
			<a
				data-type="link"
				data-variant="primary"
				href={url}
				target="_blank"
			>
				Document
			</a>
		</Container>
	);
};

export default DriveLink;
