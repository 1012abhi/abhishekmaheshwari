import { useEffect, useState } from 'react';
import axios from 'axios';
import { EyeIcon } from 'lucide-react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const trackUser = async () => {

      const apiBase = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');
      const isReturningUser = localStorage.getItem('has_visited');

      // If no storage key exists, it's a new visitor for this browser
      if (!isReturningUser) {
        localStorage.setItem('has_visited', 'true');
        const res = await axios.post(`${apiBase}/visitors/track`);
        setCount(res.data.total);
      } else {
        // Just fetch the current total without incrementing
        const res = await axios.get(`${apiBase}/visitors/count`);
        console.log('res2', res);
        setCount(res.data.total);
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
          <p className="text-xl font-bold dark:text-white">{count}</p>
        </div>  

      </div>
    </>
  )
}
export default VisitorCounter;