import { getProductById } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface ProductPageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function ProductPage({ params }: ProductPageProps) {
	const { id } = await params;
	const product = await getProductById(id);

	return (
		<div className={styles.container}>
			<div className={styles.productDetail}>
				<div className={styles.imageSection}>
					<div className={styles.mainImage}>
						<Image
							src={product.images[0].imageUrl}
							alt={product.model}
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>

				<div className={styles.infoSection}>
					<h1 className={styles.title}>{product.model}</h1>
					<p className={styles.category}>{product.category.name}</p>
					<p className={styles.price}>${product.price}</p>

					{product.newRelease && (
						<div className={styles.newTag}>New Release</div>
					)}

					<button type="button" className={styles.addToCartButton}>
						Add to Cart - ${product.price}
					</button>

					<Link href="/products" className={styles.backLink}>
						← Back to Products
					</Link>
				</div>
			</div>
		</div>
	);
}

export async function generateMetadata({ params }: ProductPageProps) {
	const { id } = await params;
	const product = await getProductById(id);

	return {
		title: `${product.model} - Shoes Nextjs`,
		description: `${product.model} - ${product.category.name}`,
	};
}
