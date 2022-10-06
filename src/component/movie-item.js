class MovieItem extends HTMLElement {
    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    render() {
      const {
        title, release_date: date, poster_path: imgMovie, popularity, vote_count: voteCount, vote_average: voteAvg,
      } = this._movie;
      const BaseUrl = 'https://image.tmdb.org/t/p/w500';
  
      $(this).addClass('col');
      $(this).html(`
        <div class="card">
          <div class="row g-0">
            <div class="col-md-5">
              <img src="${BaseUrl}${imgMovie}" class="img-fluid rounded-start">
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-subtitle mb-2 text-muted">${date}</p>
                <p class="card-subtitle mb-2 text-muted">Popularity: ${popularity}</p>
                <p class="card-subtitle mb-2 text-muted">Score Avg: ${voteAvg}</p>
              </div>
            </div>
          </div>
        </div>
      `);
    }
  }
  
  customElements.define('movie-item', MovieItem);
  