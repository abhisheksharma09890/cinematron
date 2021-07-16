import axios from 'axios';

const instance = axios.create({             // create is a method given by axios
    baseURL: "https://api.themoviedb.org/3",
});

// for eg if we make instance.get('/foo-bar')
// thr url will be : https://api.themoviedb.org/3/foo-bar

export default instance;