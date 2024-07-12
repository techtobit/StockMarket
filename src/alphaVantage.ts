import axios from "axios";
// const API_KEY = 'RIBXT3XYLI69PC0Q';
const API_KEY = 'F76TL5L97DDEFZXD';
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchWeeklyTimeSeries = async (symbol:string, year:number) => {
	// const url = `${BASE_URL}?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=${API_KEY}`;
	const url = `${BASE_URL}?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=demo`;
  const response = await axios.get(url);
  const timeSeries = response.data['Weekly Time Series'];

  const filteredData = Object.keys(timeSeries)
  .filter(date => new Date(date).getFullYear() === year)
  .reduce((acc, date) => {
    acc[date] = timeSeries[date];
    return acc;
  }, {} as any);
  console.log(filteredData);
  return filteredData;
};
  
