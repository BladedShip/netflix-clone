This is a clone of Netflix (Closest I could make it) built using [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/)

## Getting Started

- Clone this repo

- Refer to the file .env.example and create a .env file with the same variables, but with the values that you have. the example file should guide you on how to get those values.

- Install all the dependencies using:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

`Note: I did use bun as my package manager, but the app should work with any one of these.`

- Before starting the server, push the prisma schema to the database using:

```bash
npx prisma db push
```

- Now, start the development server using:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder Structure

The folder structure is as follows:

```bash
├── app
│   ├── auth
│   │   └── AuthPage
│   ├──movie
│   │   └── [slug]
│   │       └── MoviePage 
│   ├── profiles
│   │   └── ProfileSelector
│   └── HomePage (page.tsx, layout.tsx)
├── components
│   ├── Billboard
│   ├── Footer
│   ├── InfoModal
│   ├── MovieList
│   ├── Navbar
│   └── SessionProvider
├── hooks
│   ├── useCurrentUser // custom hook to get the current user
│   ├── useFavorites // custom hook to get the favorites of the current user
│   └── useBillboard // custom hook to get the billboard content
├── lib
│   ├── prismaDB // prisma client instance
│   ├── fetcher // fetcher function for using with SWR
│   └── serverAuth // server side authentication function
├── pages
│   └── api
│       ├── auth
│       │   └── [next-auth] // next-auth api routes
│       ├── favorite-movies // fetches the favorite movies of the current user
│       ├── favorite // adds or removes a movie from the favorites of the current user
│       ├── random // fetches a random movie
│       └── register // registers a new user
├── prisma
│   └── schema.prisma // prisma schema definition
├── public // public assets
├── stores
│   ├── modalVisible // store for the visibility of the info modal
│   └── movieStore // store for the billboard content
├── next.config.js
├── package.json
├── README.md 
├── tailwind.config.js
└── tsconfig.json
```

## Known Issues

- Server Side Auth is disconnected from Client side Auth, causing a bug where anyone can technically see a glimpse of the home page while using invalid credentials.

- Movie list is supposed to be a carousel, instead it is set as a grid for now due to style conflicts. Possible fixes include using react portals to render the carousel outside the parent component.

- Profile selector does not work currently as it is not being handled by the backend.

- Auth is held together using duct tape and glue as the app uses a mixture of both pages and app directories. This was done since Next-Auth doesn't fully support app directory yet (Due to the changes in how API Routes work in Next.js 13). This caused the project to be downgraded from Next 14.0.3 to Next 13.2.4.

- The above issue also causes errors to be logged in the server console when the auth flow is initiated. All this should be fixed once Next-Auth fully supports app directory.

Note: Switch from using a custom auth flow in Next-Auth to something like Clerk so that we can fully port over the auth flow to the app directory. (Use useSignUp and useSignIn hooks from Clerk)

## Rendering Techniques

- SSR - All components are rendered once on the server side and then sent to the client. This is the default behavior of Next.js’ App Router.

- CSR - Componenets and pages that are flagged with "use client" are first rendered on the server and then sent to the client. Once the client receives the page, it is re-rendered on the client side.

- ISR - All movie pages have SSG enabled. This means that the page is rendered once on the server and then sent to the client. The page is then re-rendered on the server after a certain amount of time, updating the content of the page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
