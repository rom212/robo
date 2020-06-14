import React from 'react';

const Signin = () => {
    return(
        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0 white">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6 white" for="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6 white" for="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba  bg-transparent grow pointer f6 dib white" type="submit" value="Sign in" />
                </div>
                <div className="lh-copy mt3">
                {/* <a href="#0" className="f6 link dim black db">Sign up</a> */}
                </div>
            </form>
        </main>
    );
}

export default Signin;