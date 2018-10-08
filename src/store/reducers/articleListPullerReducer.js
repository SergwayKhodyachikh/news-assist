import * as actionTypes from '../actions/actionTypes';

const initialState = {
  sources: [],
  articles: [],
  selectedSource: 'abc-news',
  searchTerm: '',
  currentPage: 0,
  numberOfPages: 0,
  loading: false,
  searchFailure: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SOURCE:
      return { ...state, sources: action.payload };

    case actionTypes.CHANGE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };

    case actionTypes.SELECT_SOURCE:
      return { ...state, selectedSource: action.payload };

    case actionTypes.CHANGE_PAGE:
      return { ...state, currentPage: action.payload };

    // ----------------------------loading: true, currentPage-----------------------------------------------
    case actionTypes.SEARCH_ARTICLE_REQUEST: {
      let { loading, currentPage } = action.payload;
      return { ...state, loading, currentPage };
    }

    case actionTypes.SEARCH_ARTICLE_SUCCESS: {
      let { articles, numberOfPages, loading, searchFailure } = action.payload;
      return { ...state, articles, numberOfPages, loading, searchFailure };
    }

    case actionTypes.SEARCH_ARTICLE_FAILURE: {
      let { searchFailure, loading } = action.payload;
      return { ...state, searchFailure, loading };
    }

    case actionTypes.GET_ARTICLES_REQUEST: {
      let { loading } = action.payload;
      return { ...state, loading };
    }

    case actionTypes.GET_ARTICLES_SUCCESS: {
      let { articles, numberOfPages, loading, searchFailure } = action.payload;
      return { ...state, articles, numberOfPages, loading, searchFailure };
    }

    case actionTypes.GET_ARTICLES_FAILURE: {
      let { searchFailure, loading } = action.payload;
      return { ...state, searchFailure, loading };
    }

    default:
      return state;
  }
};
