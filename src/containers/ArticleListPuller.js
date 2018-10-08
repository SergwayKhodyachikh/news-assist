import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewsFilterForm from '../components/ArticleListPuller/NewsFilterForm/NewsFilterForm';
import NewsArticlesTable from '../components/ArticleListPuller/NewsArticlesTable/NewsArticlesTable';
import * as articleListPullerActions from '../store/actions/ArticleListPullerActions';

export class ArticleListPuller extends Component {
  componentDidMount() {
    if (this.props.sources.length === 0) {
      this.props.getSource();
    }
    if (this.props.sources.length === 0) {
      const source = this.props.selectedSource;
      this.props.getArticles(source);
    }
  }

  render() {
    const {
      sources,
      articles,
      searchTerm,
      selectedSource,
      selectSource,
      changeSearchTerm,
      searchArticle,
      currentPage,
      numberOfPages,
      changePage,
      loading,
      searchFailure
    } = this.props;

    return (
      <div>
        <NewsFilterForm
          sources={sources}
          selectedSource={selectedSource}
          selectSource={selectSource}
          searchTerm={searchTerm}
          changeSearchTerm={changeSearchTerm}
          searchArticle={searchArticle}
        />
        <NewsArticlesTable
          articles={articles}
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          changePage={changePage}
          loading={loading}
          searchFailure={searchFailure}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sources: state.articleListPuller.sources,
  articles: state.articleListPuller.articles,
  selectedSource: state.articleListPuller.selectedSource,
  searchTerm: state.articleListPuller.searchTerm,
  currentPage: state.articleListPuller.currentPage,
  numberOfPages: state.articleListPuller.numberOfPages,
  loading: state.articleListPuller.loading,
  searchFailure: state.articleListPuller.searchFailure
});

const mapDispatchToProps = {
  getSource: articleListPullerActions.getSource,
  getArticles: articleListPullerActions.getArticles,
  changeSearchTerm: articleListPullerActions.changeSearchTerm,
  selectSource: articleListPullerActions.selectSource,
  searchArticle: articleListPullerActions.searchArticle,
  changePage: articleListPullerActions.changePage
};

ArticleListPuller.propTypes = {
  getSource: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  changeSearchTerm: PropTypes.func.isRequired,
  searchArticle: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,

  sources: PropTypes.array.isRequired,
  articles: PropTypes.array.isRequired,
  selectedSource: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  searchFailure: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListPuller);
