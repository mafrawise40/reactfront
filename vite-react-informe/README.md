# reactfront
Projeto de construção do FrontEnd em React.



# Configurando tailwing 
Seguindo a documentação não funciona corretamente. 
Tem que criar um arquivo chamado postcss.config.cjs na raiz do projeto e colocar o código dentro dele. 

```bash
 module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  }
```

tailwind.config.js 


```bash 
 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
  }
```


Se você não é um webdesign use flowbite
```bash
npm install flowbite flowbite-react

https://flowbite.com/docs/getting-started/react/


```
