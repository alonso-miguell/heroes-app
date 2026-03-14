# Some notes to avoid conflicts with tailwindcss and shadcn


- Make sure that both are latests versions (v4 for both)
- Install tailwind css with vite
 ```js
npm install tailwindcss @tailwindcss/vite
```
- Verify vite.config.ts has the plugin and alias config:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite"
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
```
- src/index.css has:
 ```js
@import "tailwindcss";
```
- Add a path to tsconfig.app.json
```json
"compilerOptions": {
    "baseUrl": ".",
        "paths": {
        "@/*": ["./src/*"]
}
```

