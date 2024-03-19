import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import { useStocks } from "@/context/StockContext";
import StockGraph from "../../components/StockGraph";
import stockData from "@/mockdata/stockData.json";

export default function StockDetailsPage({ initialStock }) {
  const { stocks } = useStocks();
  const [stock, setStock] = useState(initialStock);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Find the stock in the context state
    const contextStock = stocks.find((s) => s.id.toString() === id);
    if (contextStock) {
      setStock(contextStock);
    }
  }, [id, stocks]);

  // Dynamic SEO
  const pageTitle = `${stock.symbol} Stock Details | Stock-Dashboard`;
  const pageDescription = `View detailed information about ${stock.symbol}, including the current price, historical data, and more.`;
  const pageKeywords = `${stock.symbol}, stock details, current price, historical data`;

  return (
    <Layout title={pageTitle} description={pageDescription} keywords={pageKeywords}>
      <main>
        <Header />
        <section className="max-w-4xl flex flex-col gap-6 items-center bg-white shadow-lg rounded-lg p-8 my-10 mx-12">
          <h1 className="text-3xl font-bold text-gray-800">{stock.symbol}</h1>
          <p className="text-xl text-gray-600">Current Price: ${stock.price}</p>
          <div className="w-full">
            <StockGraph symbol={stock.symbol} />
          </div>
        </section>
      </main>
    </Layout>
  );
}

// Fetching initial stock details using getServerSideProps for SSR
export async function getServerSideProps({ params }) {
  // Find the stock based on the id provided in the URL
  const foundStock = stockData.find((s) => s.id.toString() === params.id);

  // Fallback in case the stock is not found
  const initialStock = foundStock || {
    id: params.id,
    symbol: "Not Found",
    price: 0,
  };

  return { props: { initialStock } };
}
