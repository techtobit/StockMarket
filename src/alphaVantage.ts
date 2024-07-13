import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchWeeklyTimeSeries = async (symbol:string,intervalSelected:string,  selectedTimeSeries:string, year:number, API_KEY:string) => {

  console.log(API_KEY);
  
  let interval:string | null =''
  let url: string | null = null;
	// url = `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${intervalSelected}&apikey=demo`;

  if (selectedTimeSeries === 'TIME_SERIES_INTRADAY') {
    url = `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${intervalSelected}&apikey=${API_KEY}`;
    interval = `Time Series (${intervalSelected})`
    
  } 
  else {
    switch (selectedTimeSeries) {
      case 'TIME_SERIES_WEEKLY':
        url = `${BASE_URL}?function=${selectedTimeSeries}&symbol=${symbol}&apikey=${API_KEY}`;
        interval='Weekly Time Series';
        break;
      case 'TIME_SERIES_MONTHLY':
        url = `${BASE_URL}?function=${selectedTimeSeries}&symbol=${symbol}&apikey=${API_KEY}`;
        interval='Monthly Time Series';
        break;
      default:
        url = `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${intervalSelected}&apikey=demo`;
        interval=`Time Series (${intervalSelected})`;
        break;
    }
  }

  if (url) {
    try {
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
    } catch (error:any) {
      console.error('Error fetching data:', error);
      toast.error(`API limit Ended: 25 requests per day`);
      return null;
    }
  } else {
    console.error('Invalid URL');
    toast.error(`Invalid URL`);
    return null;
  }

};
  
