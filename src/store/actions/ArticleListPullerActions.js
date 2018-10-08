import * as actionTypes from './actionTypes';
import * as api from '../../api';

export const getSource = () => async dispatch => {
  const res = await api.getSources();
  const sources = res.data.sources.map(source => {
    let { id, name } = source;
    return { id, name };
  });
  dispatch({
    type: actionTypes.GET_SOURCE,
    payload: sources
  });
};

export const changeSearchTerm = term => ({
  type: actionTypes.CHANGE_SEARCH_TERM,
  payload: term
});

export const selectSource = source => ({
  type: actionTypes.SELECT_SOURCE,
  payload: source
});

export const changePage = pageNumber => ({
  type: actionTypes.CHANGE_PAGE,
  payload: pageNumber
});

// -------------------------------------------------------------------------------
const articlesPerPage = 5,
  currentPage = 0;

const getNumberOfPages = length => {
  return Math.floor(length / articlesPerPage);
};

const mapArticles = res =>
  res.data.articles.map(article => {
    const { author, title, description, source, url } = article;
    return { author, title, description, source: source.name, url };
  });

export const getArticles = source => async dispatch => {
  dispatch({
    type: actionTypes.GET_ARTICLES_REQUEST,
    payload: { loading: true }
  });
  try {
    const res = await api.getArticles(source);
    const articles = mapArticles(res);
    const numberOfPages = getNumberOfPages(articles.length);
    dispatch({
      type: actionTypes.GET_ARTICLES_SUCCESS,
      payload: { articles, numberOfPages, loading: false, searchFailure: false }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ARTICLES_FAILURE,
      payload: { searchFailure: true, loading: false }
    });
  }
};

export const searchArticle = (source, search) => async dispatch => {
  dispatch({
    type: actionTypes.SEARCH_ARTICLE_REQUEST,
    payload: { loading: true, currentPage }
  });
  try {
    const res = await api.searchArticle(source, search);
    const articles = mapArticles(res);
    const numberOfPages = getNumberOfPages(articles.length);
    dispatch({
      type: actionTypes.SEARCH_ARTICLE_SUCCESS,
      payload: { articles, numberOfPages, loading: false, searchFailure: false }
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH_ARTICLE_FAILURE,
      payload: { searchFailure: true, loading: false }
    });
  }
};

// ----------------------------------------------------------
