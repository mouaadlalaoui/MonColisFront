import http from "../HTTP";



const API_URL_AUTH = http.API_URL_AUTH;



const register = (email, pseudo, nom, prenom, tel, password) => {
 
    return API_URL_AUTH.post("/sign-in", {
    email,
    pseudo,
    nom,
    prenom,
    tel,
    password,
  });
  


}
  
const Log_in = (email, password) => {
 
  return API_URL_AUTH.post("/login", {
  email,
 
  password,
});
}

;
export default Log_in;