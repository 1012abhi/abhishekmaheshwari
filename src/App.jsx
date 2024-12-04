import './App.css'
import Button from './Components/Button'
function App() {
  return (
    <>  
      <div className=''>
          <div className="flex flex-wrap justify-center items-center mt-16 gap-x-8 gap-y-8 sm:gap-x-16 sm:mt-20 md:gap-x-24 md:mt-24">
            <div className="flex justify-center">
              <img 
                src="1359.jpg" 
                alt="Responsive Image" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border border-black"
              />
            </div>

            <div className="text-center sm:text-left font-normal text-xl sm:text-2xl md:text-3xl">
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
  )
}

export default App
