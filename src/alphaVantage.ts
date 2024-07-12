import axios from "axios";
// const API_KEY = 'RIBXT3XYLI69PC0Q';
// const API_KEY = 'F76TL5L97DDEFZXD';
// const API_KEY = '1N1RODWWH2NYB4IO';
const BASE_URL = 'https://www.alphavantage.co/query';


export const fetchWeeklyTimeSeries = async (symbol:string,intervalSelected:string, year:number) => {
	// const url = `${BASE_URL}?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${API_KEY}`;
	// const url = `${BASE_URL}?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=demo`;
	// const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=1N1RODWWH2NYB4IO`;
	const url = `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${intervalSelected}&apikey=BCCXC5B1DFLSQC1Y.`;
  const interval = `Time Series (${intervalSelected})`


  const response = await axios.get(url);
  const timeSeries = response.data[interval];
  console.log(timeSeries);

  const filteredData = Object.keys(timeSeries)
  .filter(date => new Date(date).getFullYear() === year)
  .reduce((acc, date) => {
    acc[date] = timeSeries[date];
    return acc;
  }, {} as any);
  console.log(filteredData);
  return filteredData;
};
  
