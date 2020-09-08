import axios from "axios";
import url from "../utils/URL";

export default async function registerUser({ email, password, username }) {
  const response = await axios
    .post(`${url}/auth/local/register`, {
      email,
      password,
      username,
    })
    .catch((err) => console.log(err));
  return response;
}
