import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <>  
      <div className=''>
        <div className="flex flex-wrap justify-center items-center mt-16 gap-x-12 gap-y-12 sm:gap-x-20 sm:mt-24 md:gap-x-28 md:mt-28">
          {/* Enlarged Image */}
          <div className="flex justify-center">
            <img 
              src="1359.jpg" 
              alt="Responsive Image" 
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border border-black"
            />
          </div>

          {/* Enlarged Text */}
          <div className="text-center sm:text-left font-normal text-2xl sm:text-3xl md:text-4xl">
            <p>Hii!</p>
            <p>I'm <b>Abhishek Maheshwari</b></p>
            <br />
            <p>MERN Stack Developer</p>
          </div>
        </div>
        
        <Button />

        {/* fixed flex flex-wrap justify-center rounded-3xl w-fit h-fit mt-60 bg-zinc-950 py-3 text-white */}
      </div>
    </>
  );
}

export default App;
