import React, { useState } from 'react';
import CandlestickChart from './CandlestickChart';
import './App.css';

const App: React.FC = () => {
  const symbols = ['IBM', 'MSFT', 'MICROSOFT',];

  const [selectedSymbol, setSelectedSymbol] = useState<string>(symbols[0])
  const [intervalSelected, setIntervalSelected] = useState<string>('5min');

  const handleIntervalClick = (interval: string) => {
    setIntervalSelected(interval);
  };

  
  



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
        <div className='flex gap-2'>
        <button onClick={() => handleIntervalClick('5min')}>5min</button>
        <button onClick={() => handleIntervalClick('15min')}>15min</button>
        <button onClick={() => handleIntervalClick('30min')}>30min</button>
        <button onClick={() => handleIntervalClick('60min')}>60min</button>
      </div>

      </section>
      <CandlestickChart symbol={selectedSymbol} intervalSelected={intervalSelected} />
    </div>
  );
};

export default App;
