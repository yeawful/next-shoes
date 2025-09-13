"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";
import Logo from "@public/header/logo.svg";
import CloseIcon from "@public/close.svg";
import ArrowIcon from "@public/arrow_down.svg";

export default function Sidebar() {
	const [open, setOpen] = useState(false);

	const disableBodyScroll = () => {
		if (typeof window !== "undefined" && window.document) {
			document.body.style.overflow = "hidden";
		}
	};

	const enableBodyScroll = () => {
		document.body.style.overflow = "unset";
	};

	const closeSidebar = () => {
		setOpen(false);
		enableBodyScroll();
	};

	const handleLinkClick = () => {
		closeSidebar();
	};

	return (
		<div className={styles.sidebar}>
			<button
				className={styles.burger}
				onClick={() => {
					setOpen(true);
					disableBodyScroll();
				}}
				type="button"
				aria-label="Open menu"
				aria-expanded={open}
			>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</button>
			<div className={`${styles.sidebarContainer} ${open && styles.active}`}>
				<div className={styles.top}>
					<div className={styles.logo}>
						<Image src={Logo} fill alt="logo" />
					</div>
					<button
						className={styles.closeButton}
						onClick={closeSidebar}
						type="button"
						aria-label="Close menu"
					>
						<Image src={CloseIcon} alt="close" width={35} height={35} />
					</button>
				</div>
				<div className={styles.sidbarContent}>
					<Link
						href="/products"
						className={styles.tab}
						onClick={handleLinkClick}
					>
						NEW DROPS 🔥
						<div className={styles.arrow}>
							<Image src={ArrowIcon} width={25} height={25} alt="men" />
						</div>
					</Link>
					<Link
						href="/products"
						className={styles.tab}
						onClick={handleLinkClick}
					>
						MEN
						<div className={styles.arrow}>
							<Image src={ArrowIcon} width={25} height={25} alt="men" />
						</div>
					</Link>
					<Link
						href="/products"
						className={styles.tab}
						onClick={handleLinkClick}
					>
						WOMEN
						<div className={styles.arrow}>
							<Image src={ArrowIcon} width={25} height={25} alt="men" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
