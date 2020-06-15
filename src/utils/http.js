import axios from 'axios';
const http = async (url, method = 'GET', body, options) => {
    const baseUrl = 'http://localhost:3000';
    options = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    };

    let data;
    try {
        const response = await axios(`${baseUrl}${url}`, {
            ...options,
            method,
            data: body,
        });
        data = response;
    } catch (error) {
        throw new Error(error);
    }

    return data;
};

export default http;
