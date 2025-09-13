import type { Metadata } from "next";
import { getAllProducts } from "@/lib/api";
import Product from "@/components/ProductCard";
import styles from "./page.module.css";

export const revalidate = 43200;

export const metadata: Metadata = {
	title: "All Products - Shoes Nextjs",
	description: "All Products - Shoes Nextjs",
};

export default async function ProductsPage() {
	const products = await getAllProducts();

	return (
		<div className={styles.productsPage}>
			<div className={styles.header}>
				<div className={styles.headerLeft}>
					<h2>ALL</h2>
					<h2>PRODUCTS</h2>
				</div>
				<div className={styles.headerRight}>
					<p>{products.length} products</p>
				</div>
			</div>

			<div className={styles.productsGrid}>
				{products.map((product) => (
					<Product
						key={product._id}
						slug={product._id}
						model={product.model}
						category={product.category.name}
						price={product.price}
						newRelease={product.newRelease}
						grid={true}
						image={product.images[0].imageUrl}
					/>
				))}
			</div>
		</div>
	);
}
