import http from "../HTTP";



const API_URL_AUTH = http.API_URL_AUTH;



const register = (email, pseudo, nom, prenom, tel, password) => {
  console.log( email,
    pseudo,
    nom,
    prenom,
    tel,
    password)
    return API_URL_AUTH.post("/inscription", {
    email,
    pseudo,
    nom,
    prenom,
    tel,
    password,
  });
};
export default register;