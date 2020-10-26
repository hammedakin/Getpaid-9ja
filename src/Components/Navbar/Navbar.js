import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    return ( 
        <>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <Link to="/" class="navbar-brand " href="#"> <strong> GetPaid Naija</strong>

  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-link active" href="#">About</a>
      <a class="nav-link" href="#">Contact</a>
      <a class="nav-link" href="#">Faqs</a>
      <Link to="/login" >
      <button  class="btn btn-light shadow my-2 my-sm-0" type="submit"> LOG IN</button>
      </Link>
    </div>
  </div>
</nav>


        </>
     );
}
 
export default Navbar;