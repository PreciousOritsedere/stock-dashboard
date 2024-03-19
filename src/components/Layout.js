import Head from "next/head";
import DashboardNav from "./DashboardNav.js";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="utf-8" />
      </Head>
      <DashboardNav />

      <div className="flex-grow ml-[260px] ">{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Stock-Dashboard",
  description: "Stock-Dashboard",
  keywords: "Dashboard, Stock",
};
