import styles from "./Reviews.module.css";
import ReviewCard from "@/components/ReviewCard";
import { getReviews } from "@/lib/api";
import Link from "next/link";

export default async function Reviews() {
	const reviews = await getReviews(3);

	return (
		<div className={styles.reviews}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<h2>REVIEWS</h2>
				</div>
				<div className={styles.headerRight}>
					<Link href="/reviews" className={styles.button}>
						SEE ALL
					</Link>
				</div>
			</div>
			<div className={styles.cards}>
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
