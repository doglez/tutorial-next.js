import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <Header />
            <RestaurantCard />
        </main>
    );
}
