# TastyGo 🍕🍔🍦

TastyGo is a modern, full-stack food ordering web application. Discover, browse, and order your favorite dishes—from artisan pizzas to decadent desserts. Built with Next.js for the frontend and Express.js + MongoDB for the backend, TastyGo delivers a seamless and delicious user experience.

**Live Site:** [https://tastygo-8d15.vercel.app](https://tastygo-8d15.vercel.app)

---

## 🚀 Features

- Beautiful, responsive UI with Next.js and Tailwind CSS
- Dynamic food menu with categories (Pizza, Burger, Ice Cream, etc.)
- User authentication (NextAuth)
- Real-time data fetching from Express.js backend (MongoDB)
- Smooth animations with Framer Motion

---

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tastygo.git
cd tastygo
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your MongoDB and NextAuth credentials:

```
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_nextauth_secret
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
