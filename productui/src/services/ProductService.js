import axios from 'axios';

const API_URL = "http://localhost:8080/products";


export const getAllProducts = ()=>{
    return axios.get(`${API_URL}/allproducts`);
}

export const getProductById = (id)=>{
    return axios.get(`${API_URL}/${id}`);
}

export const addProduct = (product)=>{
    return axios.post(`${API_URL}/addproduct`, product)
}
