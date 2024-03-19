import React from "react";
import Link from "next/link";

export default function StockList({ stocks }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              ID
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Symbol
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Price
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {stock.id}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {stock.symbol}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                ${stock.price}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <Link href={`/stocks/${stock.id}`}>
                  <p className="text-indigo-600 hover:text-indigo-900">
                    View Details
                  </p>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
