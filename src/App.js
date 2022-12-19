import { useState } from 'react';
import './App.css';
function App() {
const key = `d4153b342010ef4174468b6454bc0e26`;
const [Data,setData] = useState([{}])

  return (
    <div className='
    flex
    flex-col
    justify-center
    items-center
    p-[25px]
     '>
      <input className='
      p-4
      w-[80%]
      m-auto
      border-[1px solid]
      border-gray-200
      rounded-lg
      text-base
      shadow-md
      shadow-[#888888]
      focus:outline-none
      ' placeholder='Enter City Here' />
    </div>
  );
}

export default App;
