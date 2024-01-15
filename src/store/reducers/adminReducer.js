import actionTypes from '../actions/actionTypes';


const initialState = {
    isLoggedIn: false,
    userInfo: null,

    allUsers: [],
    allProduct: [],
    oneUser: [],
    errMessage: '',
    oneProduct: [],
    errMessageOrders: '',
    arrOrdersList: [],
    errMessageUserdk: '',
    tokenRedux: 'sfasd'

}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {


        case actionTypes.GET_ALL_USER:
            state.allUsers = action.data;
            console.log('action', action.data)

            return {
                ...state,
            }
        case actionTypes.GET_ALL_PRODUCT:
            state.allProduct = action.data;
            console.log('action', action.data)

            return {
                ...state,
            }
        case actionTypes.GET_USER:
            state.oneUser = action.data;
            console.log('action', action.data)

            return {
                ...state,
            }
        case actionTypes.EDIT_USER:
            state.errMessage = action.errMessage;


            return {
                ...state,
            }

        case actionTypes.GET_ONE_PRODUCT:
            state.oneProduct = action.data;


            return {
                ...state,
            }

        case actionTypes.CREATE_ORDERS:
            state.errMessageOrders = action.errMessage;
            console.log('action order', action)


            return {
                ...state,
            }

        case actionTypes.GET_ORDERS_LIST:
            state.arrOrdersList = action.data;
            console.log('action order', action)


            return {
                ...state,
            }

        case actionTypes.CREATE_USER_DK:
            state.errMessageUserdk = action.data;
            console.log('action order', action)


            return {
                ...state,
            }
        case actionTypes.USER_LOGIN_SUCCESS:
            state.tokenRedux = action.token;
            console.log('USER_LOGIN_SUCCESS', action.token)
            return {
                ...state,



            }




        default:
            return state;
    }
}

export default adminReducer;