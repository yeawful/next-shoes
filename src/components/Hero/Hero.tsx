"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { useState } from "react";

const IMAGES = ["/hero/hero1.jpeg", "/hero/hero2.jpeg", "/hero/hero3.jpeg"];

export default function Hero() {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <div className={styles.hero}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          DO IT <span className={styles.titleRight}>RIGHT</span>
        </span>
        <span className={styles.titleSpan}></span>
      </div>
      <div className={styles.main}>
        <div className={styles.sideBar}>
          <p>Nike product of the year</p>
        </div>
        <div className={styles.product}>
          <h2>NIKE AIR MAX</h2>
          <p>{"Nike introducing the new air max for everyone's comfort"}</p>
          <Link href="/products">SHOP NOW</Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            priority={true}
            className={styles.image}
            src={IMAGES[mainIndex]}
            fill
            alt="show"
          />
        </div>
        <div className={styles.boxImages}>
          {IMAGES.map(
            (image, index) =>
              index !== mainIndex && (
                <button
                  key={image}
                  className={styles.boxImageContaner}
                  onClick={() => setMainIndex(index)}
                  type="button"
                  aria-label={`Show ${image} as main`}
                >
                  <Image
                    className={styles.boxImage}
                    src={image}
                    fill
                    alt="show"
                  />
                </button>
              ),
          )}
        </div>
      </div>
    </div>
  );
}
