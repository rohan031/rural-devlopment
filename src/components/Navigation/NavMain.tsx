import React from "react";
import styles from "./navigation.module.scss";
import Container from "../Container/Container";
import { NavBarLinks, navBarLinks, rootLinks } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type HandleNavBarLinks = (
	item: NavBarLinks,
	level: number
) => React.JSX.Element;

const NavMain = () => {
	const handleNavBarLinks: HandleNavBarLinks = (
		{ title, links, link },
		level
	) => {
		const isRoot = links === undefined;

		if (isRoot && link) {
			let element = (
				<li
					key={link}
					className={`${level === 0 ? styles.linkItem : ""}`}
				>
					<Link href={link} data-type="link">
						{title}
					</Link>
				</li>
			);

			return element;
		}

		if (!links) return <></>;

		return (
			<li
				key={title}
				className={styles.sublink_container}
				data-level={level}
			>
				<p>
					{title}
					{level === 0 && <FontAwesomeIcon icon={faAngleDown} />}
				</p>

				<ul className={styles.sublink} data-level={level} role="list">
					<div>
						{links.map((item) =>
							handleNavBarLinks(item, level + 1)
						)}
					</div>
				</ul>
			</li>
		);
	};

	return (
		<div className={styles.navMain}>
			<Container type="normal" className={styles.container}>
				<div className={styles.toggle}>
					<input id="nav" type="checkbox" />
					<label htmlFor="nav" className={styles.label}>
						<span></span>
					</label>

					<div>
						<Link
							href={rootLinks.donate.link}
							data-type="button"
							data-variant="primary"
						>
							{rootLinks.donate.title}
						</Link>
					</div>
				</div>

				<div className={styles.content}>
					<div className={styles.links}>
						<div className={styles.control}>
							<label htmlFor="nav" className={styles.label}>
								<span></span>
							</label>
						</div>

						<ul role="list">
							{navBarLinks.map((item) =>
								handleNavBarLinks(item, 0)
							)}
						</ul>
					</div>

					<div className={styles.logo}>
						<div>
							<Image
								width={200}
								height={100}
								src="/logo.webp"
								alt="logo"
								quality={100}
							/>
						</div>

						<div>
							<Image
								width={200}
								height={100}
								src="/project.webp"
								alt="project"
								quality={100}
							/>
						</div>

						<div>
							<Image
								width={200}
								height={100}
								src="/bank.webp"
								alt="bank"
								quality={100}
							/>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavMain;
