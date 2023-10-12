# GrowPal-Web

## About

This is a website written with the Svelte Framework. This is known to be the most fun to use web framework currently existing in the world of web frameworks.

Growpal is an ecommerce app made specifically for apartment and villa societies. You might have seen sellers in your society selling home made food, baked cakes, jewellery, clothes etc. The way they market now is just through annoying and spammy WhatsApp forwards. This is not ideal and this project aims to solve that by building a custom made area specific ecommerce app for these sellers.

## Developing

1. Make sure you have `nodejs` installed on your system.
2. Clone this repository
3. cd into the cloned directory: `cd MUNSocWebsite`
4. Run `npm install` to install all the needed dependencies
5. Run `yarn run dev` to localhost the website
6. You can find the website at `http://localhost:5173`

## Folder Structure

Most of of your development will be in the src folder. It looks like this:

```shell
src
├── app.css
├── app.html
├── index.test.js
├── lib
│   └── store.js
└── routes
    ├── +layout.svelte
    ├── +page.js
    ├── +page.svelte
    ├── about
    │   └── +page.svelte
    └── sell
        └── +page.svelte

5 directories, 9 files
```

Every folder inside the `/routes` folder is a route on the web application. This is similar to frameworks like `Next.JS`. Every route has a `+page.svelte` file inside them which contains the web page contents for that particular route. Please aproach the maintainer or look up documentation for any kind of clarifications.

## Tech Used

### The technologies used are

1. Svelte | [docs](https://svelte.dev/docs) | [tutorial](https://svelte.dev/tutorial/basics)
2. Sveltekit | [docs](https://kit.svelte.dev/docs/introduction)
3. Vite | [docs](https://vitejs.dev/guide/)
4. Tailwind CSS | [docs](https://tailwindcss.com/docs/installation)

The website is server-side-rendered using `sveltekit` and hosted on `vercel`

## Maintainer

Anurag Rao [@anuragrao04](https://github.com/anuragrao04)

email: [roanu2004@gmail.com](mailto:raoanu2004@gmail.com)
phone number: +91 9663006833
