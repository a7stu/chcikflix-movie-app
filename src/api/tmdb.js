import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: "application/json"
    },
    params: {
        api_key: '1e9a89d90dbf9a1c7aa6d11c3429ad11'
    }
})