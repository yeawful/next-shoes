import styles from "./Products.module.css";
import Product from "@/components/ProductCard";
import Link from "next/link";
import { getProducts } from "@/lib/api";

export default async function Products() {
  const data = await getProducts();

  return (
    <div id="drops" className={styles.products}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Don't miss out</h2>
          <h2>new drops</h2>
        </div>
        <div className={styles.headerRight}>
          <Link href="/products" className={styles.button}>
            SHOP NEW DROPS
          </Link>
        </div>
      </div>
      <div className={styles.productsWrapper}>
        {data?.map((product) => (
          <Product
            key={product._id}
            slug={product._id}
            model={product.model}
            category={product.category.name}
            price={product.price}
            newRelease={product.newRelease}
            image={product.images[0].imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
