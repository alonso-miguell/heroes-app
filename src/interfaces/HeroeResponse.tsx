import type {Hero} from "@/interfaces/Hero.tsx";

export interface HeroesResponse {
    total: number;
    pages: number;
    heroes: Hero[];
}