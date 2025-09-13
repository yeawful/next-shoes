import type { Review } from "@shared/types/index";

export const reviews: Review[] = [
	{
		_id: "1",
		title: "Good Quality",
		content: "I highly recommend shopping from kicks. The quality is amazing!",
		rating: 5.0,
		user: {
			name: "John Doe",
			imageUrl: "/review/user-img1.jpeg",
		},
		productImage: "/review/review-img1.png",
		createdAt: "2024-01-15T10:30:00Z",
	},
	{
		_id: "2",
		title: "Excellent Service",
		content: "Fast shipping and great customer service. Will buy again!",
		rating: 4.0,
		user: {
			name: "Jane Smith",
			imageUrl: "/review/user-img2.png",
		},
		productImage: "/review/review-img2.png",
		createdAt: "2024-01-10T14:20:00Z",
	},
	{
		_id: "3",
		title: "Perfect Fit",
		content: "The shoes fit perfectly and are very comfortable for daily use.",
		rating: 3.0,
		user: {
			name: "Mike Johnson",
			imageUrl: "/review/user-img3.png",
		},
		productImage: "/review/review-img3.png",
		createdAt: "2024-01-05T09:15:00Z",
	},
	{
		_id: "4",
		title: "Good Quality",
		content: "I highly recommend shopping from kicks. The quality is amazing!",
		rating: 5.0,
		user: {
			name: "John Doe",
			imageUrl: "/review/user-img1.jpeg",
		},
		productImage: "/review/review-img1.png",
		createdAt: "2024-01-15T10:30:00Z",
	},
	{
		_id: "5",
		title: "Excellent Service",
		content: "Fast shipping and great customer service. Will buy again!",
		rating: 5.0,
		user: {
			name: "Jane Smith",
			imageUrl: "/review/user-img2.png",
		},
		productImage: "/review/review-img2.png",
		createdAt: "2024-01-10T14:20:00Z",
	},
];
