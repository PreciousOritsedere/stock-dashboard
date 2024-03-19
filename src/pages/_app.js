import "@/styles/globals.css";
import { StockProvider } from "@/context/StockContext";
export default function App({ Component, pageProps }) {
  return (
    <StockProvider>
      <Component {...pageProps} />
    </StockProvider>
  );
}
