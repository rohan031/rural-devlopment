"use client";

import React, { useRef } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
	type: "normal" | "wide" | "full" | "sm-full" | "lg-full" | "sm-full-wide";
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	id?: string;
	htmlRef?: React.MutableRefObject<HTMLDivElement | null>;
	container?: boolean;
}

const Container = ({
	type,
	children,
	className,
	style,
	id,
	htmlRef,
	container,
}: ContainerProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const getClassname = (type: string) => {
		switch (type) {
			case "normal":
				return styles.normal;
			case "wide":
				return styles.wide;
			case "full":
				return styles.full;
			case "sm-full":
				return styles.sm_full;
			case "lg-full":
				return styles.lg_full;
			case "sm-full-wide":
				return styles.sm_full_wide;
		}
	};

	return (
		<div
			className={`${getClassname(type)} ${className} ${
				container ? styles.container : ""
			}`}
			id={id}
			style={style}
			ref={htmlRef ? htmlRef : containerRef}
		>
			{children}
		</div>
	);
};

export default Container;
