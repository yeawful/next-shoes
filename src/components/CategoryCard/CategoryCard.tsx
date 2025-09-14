import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryCard.module.css";
import ArrowIcon from "@public/arrow_trend_right_up.svg";
import { getCategories } from "@/lib/api";

interface CategoryTypesProps {
  currentIndex: number;
}

export default async function CategoryCard({ currentIndex }: CategoryTypesProps) {
  const categories = await getCategories();

  if (categories.length === 0) {
    return null;
  }

  const currentCategory = categories[currentIndex];
  const nextCategoryIndex = (currentIndex + 1) % categories.length;
  const nextCategoryItem = categories[nextCategoryIndex];

  return (
    <div className={styles.categoryTypes}>
      <Link
        href={currentCategory.href}
        className={styles.categoryOne}
        style={{ backgroundColor: currentCategory.bgColor }}
      >
        <div className={styles.categoryImageContainer}>
          <Image
            className={styles.categoryImage}
            src={currentCategory.image}
            fill
            alt={currentCategory.name}
          />
        </div>
        <div className={styles.categoryTab}>
          <div className={styles.categoryInfo}>
            <p>{currentCategory.displayName}</p>
            <p>Shoes</p>
          </div>
          <div className={styles.categoryButton}>
            <div className={styles.categoryButtonIcon}>
              <Image
                className={styles.categoryIcon}
                src={ArrowIcon}
                fill
                alt="forward"
              />
            </div>
          </div>
        </div>
      </Link>

      <Link
        href={nextCategoryItem.href}
        className={styles.categoryTwo}
        style={{ backgroundColor: nextCategoryItem.bgColor }}
      >
        <div className={styles.categoryImageContainer}>
          <Image
            className={styles.categoryImage}
            src={nextCategoryItem.image}
            fill
            alt={nextCategoryItem.name}
          />
        </div>
        <div className={styles.categoryTab}>
          <div className={styles.categoryInfo}>
            <p>{nextCategoryItem.displayName}</p>
            <p>Shoes</p>
          </div>
          <div className={styles.categoryButton}>
            <div className={styles.categoryButtonIcon}>
              <Image
                className={styles.categoryIcon}
                src={ArrowIcon}
                fill
                alt="forward"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
