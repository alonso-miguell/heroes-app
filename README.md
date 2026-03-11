# Some notes toa void conflicts with tailwindcss and shadcn


- Make sure that both are latests versions (v4 for both)
- Install tailwind css with vite
 ```js
npm install tailwindcss @tailwindcss/vite
```
- Verify vite.config.ts has the plugin:
```js
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()]
}
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

