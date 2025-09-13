"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import Sidebar from "@/components/Sidebar";
import DropdownIcon from "@public/caret_down.svg";
import Logo from "@public/header/logo.svg";
import SearchIcon from "@public/header/search.svg";
import UserIcon from "@public/header/user.svg";
import CartIcon from "@public/header/cart.svg";

export default function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.categories}>
				<Link href="/products" className={styles.category}>
					New Drop 🔥
				</Link>
				<Link href="/products" className={styles.category}>
					Men
					<Image src={DropdownIcon} alt="drop-down" width={12} height={12} />
				</Link>
				<Link href="/products" className={styles.category}>
					Women
					<Image src={DropdownIcon} alt="drop-down" width={12} height={12} />
				</Link>
			</div>
			<Sidebar />
			<Link href="/" className={styles.logoContainer}>
				<div className={styles.logo}>
					<Image src={Logo} fill alt="logo" />
				</div>
			</Link>
			<div className={styles.action}>
				<Link href="/" className={styles.search}>
					<Image src={SearchIcon} fill alt="search" />
				</Link>
				<Link href="/" className={styles.user}>
					<Image src={UserIcon} fill alt="user profile" />
				</Link>
				<Link href="/" className={styles.cart}>
					<Image src={CartIcon} fill alt="search" />
				</Link>
			</div>
		</div>
	);
}
