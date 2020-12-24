import axios from 'axios';

const API_KEY = 'c01309924cd94e7e897fc7336bd37533';

const LANGUAGE = 'en';

export const getSources = () =>
  axios.get(
    `https://newsapi.org/v2/sources?apiKey=${API_KEY}&language=${LANGUAGE}`
  );

export const getArticles = source =>
  axios.get(
    `https://newsapi.org/v2/everything?sources=${source}&apiKey=${API_KEY}`
  );

export const searchArticle = (source, search) =>
  axios.get(
    `https://newsapi.org/v2/everything?apiKey=${API_KEY}&sortBy=popularity&sources=${source}&q=${search}`
  );
