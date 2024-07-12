import React, { useState } from 'react';
import CandlestickChart from './CandlestickChart';
import './App.css';

const App: React.FC = () => {
  const symbols = ['IBM', 'MSFT', 'MICROSOFT',];


  const [selectedSymbol, setSelectedSymbol] = useState<string>(symbols[0])


  return (
    <div className="App text-green-500">
      <h1>Stock Candlestick Chart</h1>
      <section className='w-full h-screen bg-whtie'>
        <select value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.target.value)}>
          {
            symbols.map(symbol => (
              <option key={symbol} value={symbol}>{symbol}</option>
            ))
          }
        </select>

      </section>
      <CandlestickChart symbol={selectedSymbol} />
    </div>
  );
};

export default App;
