const apiKey = 'f10b3125f78d707693fe29664acba6d1';
class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then((responseJson) => {
            if (responseJson.results.length) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(new Error(`<b>${keyword}</b> is not found`));
            }
        });
    }
}

export default DataSource;