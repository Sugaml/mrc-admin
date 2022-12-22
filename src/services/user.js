import axios from 'axios';

export const getStudentGeneral = (token, url) => {
const config = {
    headers: { Authorization: `basic ${token}` }
};
    return axios.get(
        `${process.env.REACT_APP_API}/${url}`,
        config
        );
};

export const getUser = (token, url) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
        return axios.get(
            `${process.env.REACT_APP_API}/${url}`,
            config
            );
};


export const getUsers = (token, url) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
        return axios.get(
            `${process.env.REACT_APP_API}/${url}`,
            config
            );
};

export const getUserByID = (token,url,id) => {
    const config = {
        headers: { Authorization: `basic ${token}` }
    };
        return axios.get(
            `${process.env.REACT_APP_API}/${url}/${id}`,
            config
            );
};