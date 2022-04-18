import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://www.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGE0ZDk0YjNlZDkyYzMyZjU3YTUyOWU1ZDIyN2Q4YyIsInN1YiI6IjYyMmEyOWEyZDZjMzAwMDA2YzU2M2Y3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E84irXFtoBbuc5sQTnkf6yLApsBdIpWTtX-k1s2RdLc'
    return req;
})

export default apiMovie;