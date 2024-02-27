import React from 'react'
import Award from './assets/award.png'
import Logo from './assets/logo.png'
import Pic from './assets/pic.png'
import Tools from './assets/tools.png'
import Call from './assets/call.png'
import Facebook from './assets/facebook.png'
import World from './assets/world.png'

const App = () => {
  return (
    <>
    <div className='flex flex-col items-center w-full text-base px-3 '>
      <div id='container' className='flex flex-row gap-5 phone:flex-col-reverse tablet:flex-row text-base '>
      <img className='h-screen w-96 m-8 mt-44 phone:mt-5 m-2 tablet:mt-44 m-8 ' src={Award} alt='award'></img>
      <h1 className='w-full mx-5 '>
        <img className='w-2/4 ' src={Logo} alt='logo'></img>
        <h2 className='font-bold my-2 '>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
        <ul className='list-disc mx-11 '>
          <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
        <img className='w-full my-4 ' src={Pic} alt='picture'></img>
        <h3 className=''>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h3>
      </h1>
      </div>
      <div className='mt-16 m-2 phone:text-xs tablet:text-base'>
        <div className='flex justify-center flex-col text-center '>
        <h4>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h4>
        <img className='my-5 mx-40 phone:px-4 tablet:px-40 ' src={Tools} alt='tools'></img>
        <h3>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</h3>
        <hr className='border-red border-b-2 m-5 phone:mx-1 my-4  tablet:m-5 '/>
        <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        <h5 className='m-5 phone:m-3 tablet:m-5 '>CHEMICALS & PROCESS <span className='text-red font-bold '>|</span> POWER <span className='text-red font-bold '>|</span> WATER & WASTE WATER <span className='text-red font-bold '>|</span> OILS & GAS <span className='text-red font-bold '>|</span> PHARMA <span className='text-red font-bold '>|</span> SUGARS & DISTILLERIES <span className='text-red font-bold '>|</span> PAPER & PULP <span className='text-red font-bold '>|</span> MARINE & DEFENCE <span className='text-red font-bold '>|</span> METAL & MINING <span className='text-red font-bold '>|</span> FOOD & BEVERAGE <span className='text-red font-bold '>|</span> PETROCHEMICAL & REFINERIES <span className='text-red font-bold '>|</span> SOLAR <span className='text-red font-bold '>|</span> BUILDING <span className='text-red font-bold '>|</span> HVAC <span className='text-red font-bold '>|</span> FIRE FIGHTING <span className='text-red font-bold '>|</span> AGRICULTURE & RESIDENTIAL</h5>
        </div>
        <div id='footer' className='bg-red inline-flex justify-around w-full p-8  text-white '>
          <h1 className='inline-flex items-center gap-1 '><img className='ft' src={Call} ></img>Toll free <b>1800 200 1234</b></h1>
          <h1 className='inline-flex items-center gap-1 '><img className='ft' src={Facebook} ></img><a href='https://www.facebook.com/cripumps'>www.facebook.com/cripumps</a></h1>
          <h1 className='inline-flex items-center gap-1 '><img className='ft' src={World} ></img><a href='https://www.crigroups.com/'>www.cripumps.com</a></h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
