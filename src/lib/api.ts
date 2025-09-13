import type {
	Category,
	Product as ProductType,
	Review as ReviewType,
} from "../../shared/types";

const API_BASE_URL =
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export type { ProductType, ReviewType };

export async function getProducts(): Promise<ProductType[]> {
	try {
		const response = await fetch(
			`${API_BASE_URL}/products?newRelease=true&limit=4`
		);

		if (!response.ok) {
			throw new Error("Failed to fetch products");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
}

export async function getProductById(id: string): Promise<ProductType> {
	try {
		const response = await fetch(`${API_BASE_URL}/products/${id}`);

		if (!response.ok) {
			throw new Error("Failed to fetch product");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching product:", error);
		throw error;
	}
}

export async function getAllProducts(params?: {
	category?: string;
	limit?: number;
}): Promise<ProductType[]> {
	try {
		const url = new URL(`${API_BASE_URL}/products`);

		if (params?.category) {
			url.searchParams.append("category", params.category);
		}

		if (params?.limit) {
			url.searchParams.append("limit", params.limit.toString());
		}

		const response = await fetch(url.toString());

		if (!response.ok) {
			throw new Error("Failed to fetch products");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
}

export async function getCategories(): Promise<Category[]> {
	try {
		const response = await fetch(`${API_BASE_URL}/categories`);
		if (!response.ok) {
			throw new Error("Failed to fetch categories");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
}

export async function getReviews(limit?: number): Promise<ReviewType[]> {
	try {
		const url = new URL(`${API_BASE_URL}/reviews`);

		if (limit) {
			url.searchParams.append("limit", limit.toString());
		}

		const response = await fetch(url.toString());

		if (!response.ok) {
			throw new Error("Failed to fetch reviews");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching reviews:", error);
		throw error;
	}
}

export async function getReviewById(id: string): Promise<ReviewType> {
	try {
		const response = await fetch(`${API_BASE_URL}/reviews/${id}`);

		if (!response.ok) {
			throw new Error("Failed to fetch review");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching review:", error);
		throw error;
	}
}
