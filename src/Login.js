import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



  function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isget, issetget] = useState(false);  


    var data = "";
    const btnhandler = () => {

        axios.post('http://localhost:5000/logindata', {
            
            password: password,
            email: email,
        })
            .then(function (response) {
                data = response.data

                if (data._id != '') {
                    issetget(true)
                }
                console.log(response);
                if(response.data.value){
                    window.alert("login successfull");
                    navigate("/Home");
                }
                else{
                    window.alert("invalid user data");
                  }
            })
            .catch(function (error) {
                console.log(error);
            });
   
    }
return(
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div
          className="card bg-dark text-white"
          style={{ borderRadius: "1rem" }}
        >
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase login-color">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="typeEmailX"
                  className="form-control form-control-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="typeEmailX">
                  Email
                </label>
              </div>
              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  id="typePasswordX"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="typePasswordX">
                  Password
                </label>
              </div>
              <p className="small mb-5 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="submit" onClick={btnhandler}
              >
                Login
              </button>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white">
                  <i className="fab fa-facebook-f fa-lg" />
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-twitter fa-lg mx-4 px-2" />
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-google fa-lg" />
                </a>
              </div>
            </div>
            <div>
              <p className="mb-0">
                Don't have an account?{" "}
                <a href="#!" className="text-white-50 fw-bold">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

)
}
export default Login;