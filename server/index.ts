import express, {
	type Request,
	type Response,
	type Application,
} from "express";
import cors from "cors";
import dotenv from "dotenv";
import { products } from "./data/products";
import { reviews } from "./data/reviews";
import { categories } from "./data/categories";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(
	cors({
		origin: process.env.CORS_ORIGIN || "http://localhost:3000",
		credentials: true,
	})
);
app.use(express.json());

app.get("/api/products", (req: Request, res: Response) => {
	try {
		const { category, newRelease, limit } = req.query;
		let filteredProducts = products;

		if (category && typeof category === "string") {
			const categoryLower = category.toLowerCase();
			filteredProducts = filteredProducts.filter((product) =>
				product.category.name.toLowerCase().includes(categoryLower)
			);
		}

		if (newRelease === "true") {
			filteredProducts = filteredProducts.filter(
				(product) => product.newRelease
			);
		}

		if (limit && typeof limit === "string") {
			const limitNumber = parseInt(limit, 10);
			filteredProducts = filteredProducts.slice(0, limitNumber);
		}

		res.json(filteredProducts);
	} catch (error) {
		console.error("Error in /api/products:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.get("/api/products/:id", (req: Request, res: Response) => {
	try {
		const productId = req.params.id;
		const product = products.find((p) => p._id === productId);

		if (!product) {
			return res.status(404).json({ error: "Product not found" });
		}

		res.json(product);
	} catch (error) {
		console.error("Error in /api/products/:id:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.get("/api/categories", (_req: Request, res: Response) => {
	try {
		res.json(categories);
	} catch (error) {
		console.error("Error in /api/categories:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.get("/api/reviews", (req: Request, res: Response) => {
	try {
		const { limit } = req.query;
		let filteredReviews = reviews;

		if (limit && typeof limit === "string") {
			const limitNumber = parseInt(limit, 10);
			filteredReviews = filteredReviews.slice(0, limitNumber);
		}

		res.json(filteredReviews);
	} catch (error) {
		console.error("Error in /api/reviews:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.get("/api/reviews/:id", (req: Request, res: Response) => {
	try {
		const reviewId = req.params.id;
		const review = reviews.find((r) => r._id === reviewId);

		if (!review) {
			return res.status(404).json({ error: "Review not found" });
		}

		res.json(review);
	} catch (error) {
		console.error("Error in /api/reviews/:id:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
