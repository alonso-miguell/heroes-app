import axios from "axios";

const BASE_URL= import.meta.env.VITE_APP_URL;

export const HeroApi = axios.create({
    baseURL: `${BASE_URL}/api/heroes`,
});