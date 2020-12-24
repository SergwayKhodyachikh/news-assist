import axios from 'axios';

// const API_KEY = 'EeUauFBzttPKRLquyM';

export const getGender = name =>
  // axios.get(`https://gender-api.com/get?name=${name}&key=${API_KEY}`);
  axios.get(`http://localhost:3001/api/genders/${name}`);

export const postGender = (registerName, registerGender) =>
  axios.post('http://localhost:3001/api/genders/', {
    name: registerName,
    gender: registerGender
  });
