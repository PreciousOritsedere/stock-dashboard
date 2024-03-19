# Stock Dashboard

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), designed to display real-time stock prices. The application showcases the use of WebSockets for real-time data updates, SEO optimizations, and performance enhancements.

## Getting Started

First, install the dependencies:

````bash
npm install
# or
yarn install


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project Structure

This section details the key components and architectural decisions made in the development of the Stock Dashboard application.

## State Management

I used React's Context API for global state management, encapsulated within the `StockContext`. This context maintains the state of stock data across the application, ensuring that components such as the stock list and details pages can access and display the latest stock information. The `StockContext` is defined in `StockContext.js` and provides a structured way to simulate real-time data updates and share state efficiently between components without prop-drilling.

## Real-time Updates

As per the requirements of the task for this application, I made use of the ws library to implement Websocket for real-time tracking in order to provide simulated live updates of stock prices to the users. I achieved through a mock WebSocket connection established in the `StockContext`. The mock WebSocket, is defined within `StockContext.js`, it periodically updates the prices of stocks in the state, thereby emulating a live data feed environment. This approach allows for the demonstration of real-time data flow without the need for an actual backend service.

## SEO and Performance Optimizations
As per the requirements of the task for this application, I also incorporated several SEO and performance optimization strategies to enhance user experience and search engine rankings such as;

 **Dynamic Meta Tags:** I dynamically updates the  Stock detail page   <title> and <meta name="description"> tags based on the specific stock being viewed. This is implemented within the Layout component and ensures that each stock detail page is uniquely identifiable by search engines.

**Image Optimization:** I used next/image for image optimization, automatically resizing and optimizing images for different devices and resolutions.

**Server-Side Rendering (SSR) and Static Generation (SSG):** utilized SSG via getStaticProps for fast loading times and SEO benefits. For the Stock detail pages, I  leverage on SSR through getServerSideProps to fetch and display up-to-date stock information on each request.

## Assumptions and Implementations
# Mock Data
I created some mock data for stock information (stockData.json) and historical price data (graphData.json). This data simulates a database of stocks and their price movements over time, providing a foundation for the application's features without relying on external APIs.

By incorporating these strategies, the Stock Dashboard application delivers a robust user experience, demonstrating real-time data updates, SEO-friendly pages, and optimized performance.


