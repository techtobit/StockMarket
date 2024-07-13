import React, { useState } from 'react';
import CandlestickChart from './CandlestickChart';
import './App.css';
import candleIcon from './assets/candlestick.png';
import lineIcon from './assets/lineChart.png';
import lineAreaIcon from './assets/lineArea.png';
import cryptoIcon from './assets/cryptocurrency.png';
import forexIcon from './assets/forexIcon.png';
import fundamentalsIcon from './assets/fundamentals.png';
import newsIcon from './assets/news.png';

const App: React.FC = () => {
  const symbols = ['IBM', 'MSFT', 'MICROSOFT',];

  const [selectedSymbol, setSelectedSymbol] = useState<string>(symbols[0])
  const [intervalSelected, setIntervalSelected] = useState<string>('5min');
  const [selectedTimeSeries, setSelectedTimeSeries] = useState<any>('TIME_SERIES_INTRADAY');
  const [selectedCartType, setSelectedCartType] = useState<any>('candlestick');

  const handleIntervalClick = (interval: string) => {
    setIntervalSelected(interval);
  };
  const handleTimeSeriesClick = (timeSeries: string) => {
    setSelectedTimeSeries(timeSeries);
  };
  const handleCartTypeClick = (type: typeof selectedCartType) => {
    setSelectedCartType(type);
  };

  


  return (

    <div className="App text-blck bg-gray-100">

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-6 pt-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-4 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Stock</span>
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img className='w-[24px]' src={forexIcon} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Forex</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img className='w-[24px]' src={cryptoIcon} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Crypto</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img className='w-[24px]' src={fundamentalsIcon} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Fundamental</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img className='w-[24px]' src={newsIcon} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">News</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
      
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className=" px-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

          <div className='flex w-full bg-whtie gap-4'>
            <select value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.target.value)}>
              {
                symbols.map(symbol => (
                  <option key={symbol} value={symbol}>{symbol}</option>
                ))
              }
            </select>
            <div className='flex gap-2  border-2 border-gray-200 '>
              <button onClick={() => handleIntervalClick('5min')}  className='bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300'>5min</button>
              <button onClick={() => handleIntervalClick('15min')} className='bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300'>15min</button>
              <button onClick={() => handleIntervalClick('30min')} className='bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300'>30min</button>
              <button onClick={() => handleIntervalClick('60min')} className='bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300'>60min</button>
            </div>
            <div className='flex gap-2  border-2 border-gray-200 '>
              <button onClick={() => handleTimeSeriesClick('TIME_SERIES_INTRADAY')}  className='bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300'>Daily</button>
              <button onClick={() => handleTimeSeriesClick('TIME_SERIES_WEEKLY')}  className='bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300'>Weekly</button>
              <button onClick={() => handleTimeSeriesClick('TIME_SERIES_MONTHLY')} className='bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300'>Monthly</button>
            </div>
            <div className='border-2 '>
              <button   onClick={() => handleCartTypeClick('candlestick')} className='px-4 btn btn-blue bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300' >
                <img className='w-8 h-8' src={candleIcon} alt="" />
              </button>
              <button  onClick={() => handleCartTypeClick('line')} className='px-4 btn btn-blue bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300' >
                <img className='w-8 h-8' src={lineIcon} alt="" />
              </button>
              <button onClick={() => handleCartTypeClick('area')} className='px-4 btn btn-blue bg-blue-100 px-1 rounded-md m-1 hover:bg-blue-300' >
                <img className='px-4 btn btn-blue' src={lineAreaIcon} alt="" />
              </button>

            </div>

          </div>

          <CandlestickChart symbol={selectedSymbol} intervalSelected={intervalSelected} selectedTimeSeries={selectedTimeSeries} selectedCartType={selectedCartType} />

        </div>
      </div>


    </div >
  );
};

export default App;
