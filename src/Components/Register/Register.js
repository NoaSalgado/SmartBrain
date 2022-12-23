import React from 'react';

const Register = ({ onRouteChange }) => {
  return (
    <main className="br5 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
      <section className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f4" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-dark-blue hover-white w-100"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f4" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-dark-blue w-100"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f4" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-dark-blue w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="">
            <button
              onClick={() => onRouteChange('home')}
              className="b f1 ph3 pv2 input-reset ba b--white bg-transparent grow pointer f4 dib"
              type="button">
              Register
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;
