import Hero from "@/components/Hero";
import Drops from "@/components/Products";
import Categories from "@/components/Categories";
import Reviews from "@/components/Reviews";

export const revalidate = 43200;

export default function Home() {
  return (
    <div>
      <Hero />
      <Drops />
      <Categories />
      <Reviews />
    </div>
  );
}
