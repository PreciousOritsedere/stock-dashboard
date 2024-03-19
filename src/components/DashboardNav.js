import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Dashboard from "../../public/assets/icons/dashboard.svg";
import Transaction from "../../public/assets/icons/transaction.svg";
import Wallet from "../../public/assets/icons/wallet.svg";
import Notification from "../../public/assets/icons/notifications.svg";
import DarkMode from "../../public/assets/icons/dark-mode.svg";
import Privacy from "../../public/assets/icons/privacy-tips.svg";
import Support from "../../public/assets/icons/support.svg";
import Logout from "../../public/assets/icons/logout.svg";

export default function DashboardNav() {
  const router = useRouter();

  // Function to determine if the tab is the current page
  const isActive = (pathname) => router.pathname === pathname;

  return (
    <main className="max-w-[260px] w-full h-full fixed top-0 left-0 flex flex-col gap-16 border border-white bg-orange-500 text-sm text-white">
      <section>
        <div className="flex items-center justify-center py-2.5 px-5 border-b border-white">
          <h3 className="font-bold text-white text-xl">JASERE</h3>
        </div>

        <section className="flex flex-col gap-4 p-5">
          <Link
            href="/"
            className={`flex items-center justify-left gap-3 py-2 px-4 ${
              isActive("/") ? "bg-orange-700" : ""
            }`}
          >
            <Image src={Dashboard} alt="dashboard icon" />
            <p>Dashboard</p>
          </Link>
          <div
            className={`flex items-center justify-left gap-3 py-2 px-4 ${
              isActive("/stocks/[id]") ? "bg-orange-700" : ""
            }`}
          >
            <Image src={Transaction} alt="dashboard icon" />
            <p>Stock</p>
          </div>

          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Wallet} alt="dashboard icon" />
            <p>My Wallet</p>
          </div>
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Notification} alt="dashboard icon" />
            <p>Notifications</p>
          </div>
        </section>

        <section className="flex flex-col gap-4 p-5">
          <h3 className="text-xl font-bold">Preferences</h3>

          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Privacy} alt="dashboard icon" />
            <p>Privacy</p>
          </div>
        </section>

        <section className="flex flex-col gap-4 p-5">
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Support} alt="dashboard icon" />
            <p>Support</p>
          </div>
          <div className="flex items-center justify-left gap-3 py-2 px-4">
            <Image src={Logout} alt="dashboard icon" />
            <p>Logout</p>
          </div>
        </section>
      </section>
    </main>
  );
}
