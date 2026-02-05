import { useEffect, useState } from 'react';
import axios from 'axios';
import { EyeIcon } from 'lucide-react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trackUser = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_URL;
        
        if (!apiBase) {
          // console.error('VITE_API_URL is not defined. Check your .env file.');
          setError('API configuration missing');
          return;
        }

        // console.log('API Base URL:', apiBase);
        const isReturningUser = localStorage.getItem('has_visited');

        // If no storage key exists, it's a new visitor for this browser
        if (!isReturningUser) {
          localStorage.setItem('has_visited', 'true');
          console.log('Tracking new visitor...');
          const res = await axios.post(`${apiBase}/visitors/track`);
          console.log('Track response:', res.data);
          setCount(res.data.total);
        } else {
          // Just fetch the current total without incrementing
          console.log('Fetching count for returning visitor...');
          const res = await axios.get(`${apiBase}/visitors/count`);
          console.log('Count response:', res.data);
          setCount(res.data.total);
        }
      } catch (err) {
        // console.error('Error tracking visitor:', err);
        // console.error('Error details:', err.response?.data || err.message);
        setError(err.response?.data?.error || err.message);
      }
    };
    trackUser();
  }, []);

  return (
    <>
      <div className='flex justify-center mt-24 mb-24'>
        <div className="flex items-center justify-center sm:w-1/4 p-2 mt-4 text-center rounded-lg shadow-lg border border-zinc-300 dark:border-neutral-800 hover:bg-neutral-100 dark:bg-[#212124]">
          <div className="flex items-center mr-4 bg-neutral-200 p-2 rounded-lg dark:bg-[#212130] ">
            <EyeIcon className="w-4 h-4 text-black dark:text-[#a1a1a1] hover:text-gray-700 cursor-pointer rounded" />
          </div>
          <h2 className="text-sm font-semibold mr-2 dark:text-[#a1a1a1]">Visitor Count :</h2>
          <p className="text-xl font-bold dark:text-white">{error ? '—' : count}</p>
        </div>  

        <div className="ml-4 mt-4 text-center">

        {error && (
          <div className="mt-2 text-red-500 text-sm">
            Error: {error}
          </div>
        )}
        </div>
      </div>
    </>
  )
}
export default VisitorCounter;