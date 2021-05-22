export class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(response) {
    return response.then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка получения данных: ${res.status} ${res.statusText}`));
      })
  }

  // получаем фильмы
  getAllMovies() {
    return this._getResponseData(fetch(`${this._baseUrl}`, {
        method: 'GET',
        headers: this._headers,
      }))
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default moviesApi;
