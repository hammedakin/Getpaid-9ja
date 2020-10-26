import React, { useState }  from 'react';
import img from './group1.png'


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return ( 
        <>
<section class="signup">
    <div class="container ">

        <div class="row ">
            <div class="col-md-6  pt-5">
                <img src={img} alt="" height="50%" class=""/>

            </div>

            <div class="col-md-6">

            <div class="text-center pt-5">
                <h4> <strong> SIGN UP </strong></h4>
            </div>
            <div class="text-center">
            <box-icon
              name="user-circle"
              class="box-icon"
              size="5rem"
              color=" #2BB24C"
            ></box-icon>
            </div>
            


        <div id="login">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column" class="col-md-10">
              <div id="login-box" class="col-md-12">
                <form id="login-form" class="form" action="" method="post">
                  <div class="form-group">
                  
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="username"
                      class="form-control"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-group">
                  
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                
                    
                  <div class="text-center">
                        <button
                          type="submit"
                          name="Submit"
                          class="btn px-5  btn-md shadow mt-5"
                          value=""
                        > Login </button>
                      </div>

                    <div class="row mt-3">
                        <div class="col-md-6 ml-auto mt-2">
                        <label for="remember-me" class="">
                      <span>Registered,</span> 
                    </label>
                        </div>

                        <div class="col-md-6 mr-auto text-right">
                        <div class="forget-password mt-2">
                      <a>
                        <label>Login</label>
                      </a>
                    </div> 
                        </div>
                    </div>
                   
                   
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
                
            </div>
        </div>
    </div>
</section>

        </>
     );
}
 
export default SignUp;