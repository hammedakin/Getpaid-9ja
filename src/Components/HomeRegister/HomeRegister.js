import React from 'react';


const HomeRegister = () => {
    return ( 
        <>
    <section class="Homeregister">
    <div class="container text-center HomeRegister shadow">
    <div class="container ">
        <div class="mt-1 mb-5"> <h4> JOIN FOR MORE <span><strong> INFORMATION</strong></span></h4></div>

<div class="">
<form>
  <div class="row">
    <div class="col-md-6">
    <div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="FIRST NAME"/>
      </div>
    </div>
    <div class="col-md-6">
        
    <div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="LAST NAME"/>
      </div>
    </div>
    <div class="col-md-6">
    <div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="PHONE NUMBER"/>
      </div>
    </div>
    <div class="col-md-6"> 

      <div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="EMAIL ADDRESS"/>
      </div>
      
    </div>
  </div>


  

  <button type="button" class="btn btn-light px-5 shadow"> <strong>JOIN IN </strong> </button>
</form>
</div>
    </div>
    </div>
    </section> 
        </>
     );
}
 
export default HomeRegister;