import Veve from '../Album/veveveve.png'
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
     /** <div  className=' h-screen w-full' >
        <div className='flex items-center max-w-4xl m-auto h-screen w-full'>
            <div className=' flex justify-center m-auto items-center gap-20'>
                <div>
                    <img className='h-auto w-[600px]' src={Veve} alt="Foto Veve"/>  
                </div>
                <div>
                    <h1 className='text-yellow-300 text-3xl font-bold'>Hello Welcome to my web</h1>  
                </div>
            </div>
        </div>
    </div>
    */

    <div id='home' className='h-screen w-full flex items-center justify-center bg-black'>
        <h1 className='text-[40px] text-yellow-300'>
        <TypeAnimation
      sequence={[
        'Welcome', // Types 'One'
        1000, // Waits 1s
        'To', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Veve\'s Web', // Types 'Three' without deleting 'Two'
        1000,
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
        </h1>
    </div>

  )
}

export default Home
