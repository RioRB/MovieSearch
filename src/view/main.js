import '../component/search-bar';
import '../component/movie-item';
import '../component/movie-list';
import '../component/app-bar';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = $('search-bar')[0];
  const movieListElement = $('movie-list')[0];

  const onSubmitSearch = (ev) => {
    ev.preventDefault();
    if (searchElement.value.length) {
      DataSource.searchMovie(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
    }
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  searchElement.submitEvent = onSubmitSearch;
};

export default main;
