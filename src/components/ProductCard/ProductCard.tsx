import styles from "./ProductCard.module.css";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  slug: string;
  model: string;
  category: string;
  price: number;
  newRelease?: boolean;
  grid?: boolean;
  image: string;
}

export default function ProductCard({
  slug,
  model,
  category,
  price,
  newRelease = false,
  grid = false,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className={`${styles.product} ${grid && styles.grid}`}
    >
      <div className={styles.productImageContainer}>
        {newRelease && <div className={styles.newTag}>New</div>}
        <Image
          className={styles.productImage}
          src={image}
          alt={`${model} - ${category}`}
          fill
        />
      </div>
      <div className={styles.productInfo}>
        <p>{model}</p>
        <p>{category}</p>
      </div>
      <div className={styles.productButton}>
        VIEW PRODUCT - <span>${price}</span>
      </div>
    </Link>
  );
}
