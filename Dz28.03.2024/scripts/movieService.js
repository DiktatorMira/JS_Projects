export class MovieService {
    constructor() { this.apiKey = "81b10ed9"; }
    async search(title, type) {
        const url = `http://www.omdbapi.com/?apikey=${this.apiKey}&s=${title}&type=${type}`;
        try {
            const response = await fetch(url), data = await response.json();
            if (data.Response === "True")  return data.Search;
            else return null;
        } catch(error) { throw error; }
    }
    async getMovie(title) {
        const url = `http://www.omdbapi.com/?apikey=${this.apiKey}&t=${title}`;
        try {
            const response = await fetch(url), data = await response.json();
            if (data.Response === "True") return data;
            else return null;
        } catch(error) { throw error; }
    }
}