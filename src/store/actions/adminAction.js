

import actionTypes from "./actionTypes";
import {
    handleGetAllUsers, handleCreateAllUsers,
    handleEditUser, handleDeleteUser, handleLoginUser,
    handleCreateAllProduct, handleGetAllProduct, handleDeleteProduct, handleEditProduct,
    handleGetUser, handleGetProduct, handleCreateOrders, handleEditOrders,
    handleGetOrdersList, handleCreateUserdk, handleEditUserdk, handleEditOrdersComplete


} from '../../services/userService'

export const getAllUser = () => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetAllUsers();
            console.log('res', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ALL_USER,
                    data: res.data
                })
            }


        } catch (e) {
            console.log(e)

        }
    }
}


export const createAllUser = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateAllUsers(data1);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_ALL_USERS,
                    data: res.data
                })
                dispatch(getAllUser())
            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const DeleteUser = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleDeleteUser(data1);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_USER,
                    data: res.data
                })
                dispatch(getAllUser())
            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const EditUser = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleEditUser(data1);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_USER,
                    errMessage: res.errMessage

                })
                dispatch(getAllUser())
            }



        } catch (e) {
            console.log(e)

        }
    }
}


export const LoginUser = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleLoginUser(data1);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.USER_LOGIN_SUCCESS,
                    data: res.data,
                    token: res.token1

                })

            } else {
                dispatch({
                    type: actionTypes.USER_LOGIN_FAIL,
                    data: res.errMessage

                })
            }



        } catch (e) {
            console.log(e)

        }
    }
}



export const createAllProduct = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateAllProduct(data1);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_ALL_PRODUCT,
                    data: res.data
                })
                dispatch(getAllProduct())
            }



        } catch (e) {
            console.log(e)

        }
    }
}


export const getAllProduct = () => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetAllProduct();
            console.log('res', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ALL_PRODUCT,
                    data: res.data
                })
            }


        } catch (e) {
            console.log(e)

        }
    }
}



export const DeleteProduct = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleDeleteProduct(data1);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_PRODUCT,
                    data: res.data
                })
                dispatch(getAllProduct())
            }



        } catch (e) {
            console.log(e)

        }
    }
}


export const EditProduct = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleEditProduct(data1);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_PRODUCT,

                })
                dispatch(getAllProduct())
            }



        } catch (e) {
            console.log(e)

        }
    }
}


export const getUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetUser(data);
            console.log('res', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_USER,
                    data: res.data,

                })
            }


        } catch (e) {
            console.log(e)

        }
    }
}


export const getProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetProduct(data);
            console.log('res', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ONE_PRODUCT,
                    data: res.data,

                })
            }


        } catch (e) {
            console.log(e)

        }
    }
}

export const createOrders = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateOrders(data1);

            dispatch({
                type: actionTypes.CREATE_ORDERS,
                errMessage: res.errMessage
            })





        } catch (e) {
            console.log(e)

        }
    }
}

export const EditOrders = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleEditOrders(data1);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_USER_DK,

                })

            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const getOrdersList = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleGetOrdersList(data);
            console.log('res', res)
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ORDERS_LIST,
                    data: res.data,

                })
            }


        } catch (e) {
            console.log(e)

        }
    }
}

export const CreateUserdk = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleCreateUserdk(data);
            console.log('res', res)

            dispatch({
                type: actionTypes.CREATE_USER_DK,
                data: res.errMessage

            })



        } catch (e) {
            console.log(e)

        }
    }
}

export const EditUserdk = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleEditUserdk(data1);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_ORDERS,

                })

            }



        } catch (e) {
            console.log(e)

        }
    }
}

export const EditOrdersComplete = (data1) => {
    return async (dispatch, getState) => {
        try {
            let res = await handleEditOrdersComplete(data1);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_ORDERSLIST_COMPLETE,

                })
                dispatch(getOrdersList("R1"))

            }



        } catch (e) {
            console.log(e)

        }
    }
}



