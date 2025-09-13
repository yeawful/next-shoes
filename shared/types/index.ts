export interface ProductImage {
	imageUrl: string;
}

export interface ProductCategory {
	name: string;
}

export interface Product {
	_id: string;
	model: string;
	category: ProductCategory;
	price: number;
	newRelease: boolean;
	images: ProductImage[];
	description?: string;
	sizes?: number[];
	colors?: string[];
}

export interface Category {
	id: string;
	name: string;
	displayName: string;
	image: string;
	href: string;
	bgColor: string;
}

export interface ReviewUser {
	name: string;
	imageUrl: string;
}

export interface Review {
	_id: string;
	title: string;
	content: string;
	rating: number;
	user: ReviewUser;
	productImage: string;
	createdAt: string;
}
