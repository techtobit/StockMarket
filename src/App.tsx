import React, { useState } from 'react';
import CandlestickChart from './CandlestickChart';
import './App.css';

const App: React.FC = () => {
  const symbols = ['IBM', 'MSFT', 'MICROSOFT',];

  const [selectedSymbol, setSelectedSymbol] = useState<string>(symbols[0])
  const [intervalSelected, setIntervalSelected] = useState<string>('5min');
  const [selectedCartType, setSelectedCartType] = useState<'candlestick' | 'line' | 'area' | 'bar'>('candlestick');

  const handleIntervalClick = (interval: string) => {
    setIntervalSelected(interval);
  };
  const handleCartTypeClick = (type: typeof selectedCartType) => {
    setSelectedCartType(type);
  };

  

  return (
    <div className="App text-green-500">
      <h1>Stock Candlestick Chart</h1>
      <section className='w-full bg-whtie'>
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
        <div className='border-2 '>
          <button className='px-4 btn btn-blue' onClick={() => handleCartTypeClick('candlestick')}>
            CandelStick
          </button>
          <button className='px-4 btn btn-blue'  onClick={() => handleCartTypeClick('line')}>
            Line
          </button>
          <button  className='px-4 btn btn-blue'  onClick={() => handleCartTypeClick('area')}> Area
          </button>

        </div>

      </section>
      <CandlestickChart symbol={selectedSymbol} intervalSelected={intervalSelected} selectedCartType={selectedCartType} />
    </div>
  );
};

export default App;
