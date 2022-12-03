import axios from "axios";



const APIs = {}



APIs.API_URL_AUTH = axios.create({
  baseURL:  "http://localhost:8080/api/auth/"
  // headers: {
  //   "Accept ":"application/json",
  //   "Content-type": "application/json"
  // }
});
export default APIs;