import React, { useState, useContext } from "react";
// strapi function
import loginUser from ".././strapi/loginUser";
import registerUser from ".././strapi/registerUser";
// context
import { UserContext } from "../context/user";
// handle user
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  // setup user context
  const value = useContext(UserContext);
  console.log(value);
  // state values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  // check if field filled & let user sign in, username set to 'default' to let them sign in, empty str will prevent them from sign in
  let isEmpty = !email || !password || !username;

  const toggleMember = () => {
    setIsMember((prevMember) => {
      // flick the boolean
      let isMember = !prevMember;
      // set username to default to allow sign in || empty str to register if they are not member
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      // response = await loginUser
      response = await loginUser({ email, password });
    } else {
      // response  = await  registerUser
      response = await registerUser({ email, password, username });
    }

    // handle response
    if (response) {
      // redirect user after login/register
      console.log("success", response);
    } else {
      // show alert in case no response
    }
  };

  return (
    <section className="section form">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        {/* end of single input */}
        {/* empty form text */}
        {isEmpty && <p className="form-empty">please fill out all fields</p>}
        {/* submit button */}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={handleSubmit}
          >
            sign in
          </button>
        )}
        {/* register link */}
        <p className="register-link">
          {isMember ? "need to register" : "already a member"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
