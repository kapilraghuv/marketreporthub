import React, { useState } from 'react';




export default function Loginform() {

    const [email, setEmail] = useState();
    const [password , setPassword] = useState();
    
    const Formsubmit = (e) => {
       
        e.preventDefault();
       
      
    }
    return (
        <>
            <form className="max-width-auto" onSubmit={(e)=>Formsubmit(e)}>
                
                <div className="form-group">
                    <input name="email " type="text" value={email} onChange={(e) => {setEmail(e.target.value) }}    />
                    <label>Username or email *</label>
                    <span className="focus-border"></span>
                </div>

                <div className="form-group">
                    <input name="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <label>Password *</label>
                    <span className="focus-border"></span>
                </div>

                <div className="row mb--30">
                    <div className="col-lg-6">
                        <div className="rbt-checkbox">
                            <input type="checkbox" id="rememberme" name="rememberme" />
                            <label for="rememberme">Remember me</label>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="rbt-lost-password text-end">
                            <a className="rbt-btn-link" href="#">Lost your password?</a>
                        </div>
                    </div>
                </div>

                <div className="form-submit-group">
                    

                    <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                        <span className="icon-reverse-wrapper">
                            <span className="btn-text">Log In</span>
                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        </span>
                    </button>


                </div>
            </form>
        </>
    );
}