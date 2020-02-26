import axios from 'axios';

export const axiosWithAuth = () => {
    const token  = window.localStorage.getItem('token');

    if(token === "undefined") {
        console.log("NOT LOGGED IN");
    }else{
        console.log("LOGGED IN ", {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        });
    }

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        baseURL: 'http://localhost:5000'
    })
}