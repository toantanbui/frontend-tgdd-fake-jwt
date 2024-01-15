
import axios from '../axios';

const handleGetAllUsers = () => {
    return axios.get('/crud-user-get')
}

const handleCreateAllUsers = (data) => {
    return axios.post('/crud-user-create', data)
}

const handleDeleteUser = (data) => {
    return axios.post(`/crud-user-delete?id=${data}`)
}

const handleEditUser = (data) => {
    return axios.post('/crud-user-edit', data)
}

const handleLoginUser = (data) => {
    return axios.post('/api/login', data)
}

const handleCreateAllProduct = (data) => {
    return axios.post('/crud-product-create', data)
}

const handleGetAllProduct = (data) => {
    return axios.get('/crud-product-get', data)
}

const handleDeleteProduct = (data) => {
    return axios.post(`/crud-product-delete?id=${data}`)
}

const handleEditProduct = (data) => {
    return axios.post('/crud-product-edit', data)
}
const handleGetUser = (data) => {
    return axios.get(`/crud-get-one-user?id=${data}`)
}

const handleGetProduct = (data) => {
    return axios.get(`/crud-get-one-product?id=${data}`)
}

const handleCreateOrders = (data) => {
    return axios.post('/crud-orders-create', data)
}

const handleEditOrders = (data) => {
    return axios.post('/crud-orders-edit', data)
}

const handleGetOrdersList = (data) => {
    return axios.get(`/crud-orders-get?status=${data}`)
}

const handleCreateUserdk = (data) => {
    return axios.post('/crud-dk-create', data)
}

const handleEditUserdk = (data) => {
    return axios.post('/crud-dk-edit', data)
}

const handleEditOrdersComplete = (data) => {
    return axios.post('/crud-orders-edit-complete', data)
}


export {
    handleGetAllUsers,
    handleCreateAllUsers,
    handleDeleteUser, handleEditUser, handleLoginUser, handleCreateAllProduct,
    handleGetAllProduct, handleDeleteProduct, handleEditProduct, handleGetUser,
    handleGetProduct, handleCreateOrders, handleEditOrders, handleGetOrdersList,
    handleCreateUserdk, handleEditUserdk, handleEditOrdersComplete
}