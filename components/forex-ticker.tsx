"use client"

import { useEffect, useState } from "react"

const forexData = [
  { pair: "EUR/USD", price: "1.0892", change: "+0.0012", changePercent: "+0.11%" },
  { pair: "GBP/USD", price: "1.2734", change: "-0.0023", changePercent: "-0.18%" },
  { pair: "USD/JPY", price: "149.82", change: "+0.45", changePercent: "+0.30%" },
  { pair: "AUD/USD", price: "0.6598", change: "+0.0034", changePercent: "+0.52%" },
  { pair: "USD/CAD", price: "1.3542", change: "-0.0018", changePercent: "-0.13%" },
  { pair: "USD/CHF", price: "0.8876", change: "+0.0021", changePercent: "+0.24%" },
  { pair: "NZD/USD", price: "0.6123", change: "-0.0015", changePercent: "-0.24%" },
  { pair: "USD/CNY", price: "7.2456", change: "+0.0089", changePercent: "+0.12%" },
  { pair: "GOLD", price: "2,034.50", change: "+12.30", changePercent: "+0.61%" },
  { pair: "SILVER", price: "24.89", change: "-0.23", changePercent: "-0.91%" },
  { pair: "OIL", price: "78.45", change: "+1.23", changePercent: "+1.59%" },
  { pair: "BTC/USD", price: "43,250", change: "+850", changePercent: "+2.01%" },
]

export function ForexTicker() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-slate-800 dark:bg-slate-900 border-b border-slate-700 py-2 overflow-hidden">
      <div className="flex items-center space-x-8 animate-scroll">
        <div className="flex items-center space-x-2 text-yellow-400 font-semibold whitespace-nowrap">
          <span>LIVE MARKET DATA</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-300">{currentTime.toLocaleTimeString()}</span>
        </div>
        {forexData.concat(forexData).map((item, index) => (
          <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="text-white font-medium">{item.pair}</span>
            <span className="text-slate-300">{item.price}</span>
            <span className={`text-sm ${item.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
              {item.changePercent}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
