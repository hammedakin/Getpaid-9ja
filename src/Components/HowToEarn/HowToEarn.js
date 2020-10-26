import React from 'react';
import img1 from './Group 8.svg'
import img2 from './debit-card 1.svg'
import img3 from './debit-card 2.svg'
import img4 from './collaboration 1.svg'



const HowToEarn = () => {
    return ( 
        <>


<section class="how-to-earn text-white">

    <div class=" container text-center">

<div class="pt-5 mb-5 "> <h4 class="title"> HOW TO <span class=""><strong> EARN </strong></span></h4></div>

<div class="row pb-5">
    <div class="col "><div class="image mx-auto">
        <img src={img1} alt="" /> </div>
        <h4 class="card-title">Register</h4>
    </div>
    <div class="col "><div class="image mx-auto">
        <img src={img2} alt="" /> </div>
        <h4 class="card-title">Pay</h4>
    </div>
    <div class="col "><div class="image mx-auto">
        <img src={img4} alt="" /> </div>
        <h4 class="card-title">Share Link</h4>
    </div>
    <div class="col "><div class="image mx-auto">
        <img src={img3} alt="" /> </div>
        <h4 class="card-title">Receive Payment</h4>
    </div>
    
</div>

    </div>
</section> 

        </>
     );
}
 
export default HowToEarn;