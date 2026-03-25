import type {Hero} from "@/interfaces/Hero.tsx";

export interface HeroResponse {
    total: number;
    pages: number;
    heroes: Hero[];
}