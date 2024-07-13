import React, { useEffect, useState } from 'react';
import Chart  from 'react-apexcharts';
import { fetchWeeklyTimeSeries } from './alphaVantage';
import { ApexOptions } from 'apexcharts';

interface CandlestickChartProps {
  symbol: string;
  intervalSelected: string;
  selectedCartType: 'line' | 'area' | 'bar' ;
  selectedTimeSeries: string;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ symbol,intervalSelected, selectedTimeSeries, selectedCartType }) => {
  
  const [series, setSeries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const currentYear = new Date().getFullYear();
      const data = await fetchWeeklyTimeSeries(symbol,intervalSelected, selectedTimeSeries, currentYear);

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
  }, [symbol,intervalSelected, selectedTimeSeries]);

  const options: ApexOptions = {
    chart: {

      type: selectedCartType,
      stacked: false,
    },
    fill: {

    },
    xaxis: {
      type: 'datetime'
    },
    tooltip: {
      shared: false,
    }
  };

  return (
    <div>
      <Chart options={options} series={series} type={selectedCartType} width={950} height={450} />
    </div>
  );
};

export default CandlestickChart;
