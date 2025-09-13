"use client";

import Image from "next/image";
import styles from "./Categories.module.css";
import CategoryCard from "@/components/CategoryCard";
import BackArrowIcon from "@public/backward_arrow.svg";
import ForwardArrowIcon from "@public/forward_arrow.svg";
import { useState } from "react";

export default function Categories() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextCategory = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
	};

	const prevCategory = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
	};

	return (
		<div className={styles.categories}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<h2>Categories</h2>
				</div>
				<div className={styles.headerRight}>
					<button
						type="button"
						onClick={prevCategory}
						className={styles.button}
					>
						<div className={styles.buttonIcon}>
							<Image
								className={styles.icon}
								src={BackArrowIcon}
								fill
								alt="backward"
							/>
						</div>
					</button>
					<button
						type="button"
						onClick={nextCategory}
						className={styles.button}
					>
						<div className={styles.buttonIcon}>
							<Image
								className={styles.icon}
								src={ForwardArrowIcon}
								fill
								alt="forward"
							/>
						</div>
					</button>
				</div>
			</div>
			<CategoryCard currentIndex={currentIndex} />
		</div>
	);
}
