import type {Hero} from "@/interfaces/Hero.tsx";

export interface SummaryResponse {
    totalHeroes: number;
    strongestHero: Hero;
    smartestHero: Hero;
    heroCount: number;
    villainCount: number;
}