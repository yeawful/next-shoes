// src/app/reviews/page.tsx
import type { Metadata } from "next";
import { getReviews } from "@/lib/api";
import ReviewCard from "@/components/ReviewCard";
import styles from "./page.module.css";

export const revalidate = 43200;

export const metadata: Metadata = {
	title: "All Reviews - Shoes Nextjs",
	description: "All Reviews - Shoes Nextjs",
};

export default async function ReviewsPage() {
	const reviews = await getReviews();

	return (
		<div className={styles.reviewsPage}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<h2>ALL</h2>
					<h2>REVIEWS</h2>
				</div>
				<div className={styles.headerRight}>
					<p>{reviews.length} reviews</p>
				</div>
			</div>

			<div className={styles.reviewsGrid}>
				{reviews.map((review) => (
					<ReviewCard
						key={review._id}
						userImage={review.user.imageUrl}
						productImage={review.productImage}
						title={review.title}
						content={review.content}
						rating={review.rating}
					/>
				))}
			</div>
		</div>
	);
}
