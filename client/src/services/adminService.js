import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REQUEST_URL + '/api/admin';

const getToken = () => localStorage.getItem('adminToken');

const authHeaders = () => ({
    headers: { Authorization: `Bearer ${getToken()}` }
});

export const adminService = {
    login: (username, password) =>
        axios.post(`${BASE_URL}/login`, { username, password }),

    getLanguages: () =>
        axios.get(`${BASE_URL}/languages`, authHeaders()),

    updateLanguage: (name, data) =>
        axios.put(`${BASE_URL}/languages/${name}`, { data }, authHeaders()),

    uploadImage: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return axios.post(`${BASE_URL}/upload`, formData, {
            headers: {
                ...authHeaders().headers,
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    getImages: () =>
        axios.get(`${BASE_URL}/images`, authHeaders()),

    isLoggedIn: () => !!localStorage.getItem('adminToken'),

    logout: () => localStorage.removeItem('adminToken'),
};
