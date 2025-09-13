import styles from "./ReviewCard.module.css";
import Image from "next/image";
import StarIcon from "@public/star.svg";

interface ReviewCardProps {
  userImage: string;
  productImage: string;
  title: string;
  content: string;
  rating: number;
}

export default function ReviewCard({
  userImage,
  productImage,
  title,
  content,
  rating,
}: ReviewCardProps) {
  const generateStarKey = (index: number) => {
    return `${userImage}-${productImage}-${title}-star-${index}`;
  };
  const stars = Array.from({ length: 5 }, (_, index) => (
    <div key={generateStarKey(index)} className={styles.star}>
      <Image
        src={StarIcon}
        fill
        alt="star"
        style={{ opacity: index < Math.floor(rating) ? 1 : 0.3 }}
      />
    </div>
  ));

  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <div className={styles.review}>
          <div className={styles.info}>
            <p className={styles.infoTitle}>{title}</p>
            <p className={styles.infoContent}>{content}</p>
          </div>
          <div className={styles.userImage}>
            <Image src={userImage} alt="user image" fill />
          </div>
        </div>
        <div className={styles.stars}>
          {stars}
          <p>{rating.toFixed(1)}</p>
        </div>
      </div>
      <div className={styles.reviewImage}>
        <Image src={productImage} alt="review" fill />
      </div>
    </div>
  );
}
