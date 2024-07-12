import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { fetchWeeklyTimeSeries } from './alphaVantage';

interface CandlestickChartProps {
  symbol: string;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ symbol }) => {
  console.log('candSec', symbol);
  
  const [series, setSeries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentYear = new Date().getFullYear();
      const data = await fetchWeeklyTimeSeries(symbol, currentYear);

      const chartData = Object.keys(data).map(date => {
        const { '1. open': open, '2. high': high, '3. low': low, '4. close': close } = data[date];
        return {
          x: new Date(date),
          y: [parseFloat(open), parseFloat(high), parseFloat(low), parseFloat(close)]
        };
      }).reverse();

      setSeries([{ data: chartData }]);
    };

    fetchData();
  }, [symbol]);

  const options = {
    chart: {
      type: 'candlestick'
    },
    xaxis: {
      type: 'datetime'
    }
  };

  return (
    <div>
      <Chart options={options} series={series} type="candlestick" height={350} />
    </div>
  );
};

export default CandlestickChart;
