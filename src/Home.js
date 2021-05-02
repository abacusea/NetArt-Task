import React from 'react'
import './App.css'

const Home = () => {

  return (
    <div>
        <div class="__row mg-btm">
            <div class="col_4 flex-d"><img class="img_trophy" src="/asserts/1.png" alt="" /></div>
            <div class="col_8">
                <h2 class="heading"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
                <ul class="ul">
                    <li class="li">C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li class="li">C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
                <img class="img_award" src="/asserts/2.png" alt="" />
                <div class="txt">Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</div>
            </div>
        </div>
        
        <div class="col-xl-12 txt2">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </div>
    
        <div class="img_section flex-d">
            <img class="gallery" src="/asserts/3.png" alt="" />
            <div class="materials">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </div>
        </div>

        <div class="details">
            <h3 class="hd">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
            <div class="detail_list">CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</div>
        </div>
    </div>
  )
}

export default Home
