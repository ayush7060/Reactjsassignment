import "../src/App.css";
// import Header from "./shared/component/header";
// import Footer from "./shared/component/footer";

import { Header,Footer } from "./shared/component/index";




function Registration() {
  return (
    <>
              <label htmlFor="email">
                  <b>Email</b>
              </label>
              <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  required
              />

              <label htmlFor="psw">
                  <b>Password</b>
              </label>
              <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  id="psw"
                  required
              />

              <label htmlFor="psw-repeat">
                  <b>Repeat Password</b>
              </label>
              <input
                  type="password"
                  placeholder="Repeat Password"
                  name="psw-repeat"
                  id="psw-repeat"
                  required
              />
              <hr />
              <p>
                  By creating an account you agree to our{" "}
                  <a href="#">Terms & Privacy</a>.
              </p>

              <button type="submit" className="registerbtn">
                  Register
              </button>
          
    </>
  );
}

export default function Layout() {
  return (
    <div className="container">
      <Header/>
      <Registration />
      <Footer />
    </div>
  );
}
