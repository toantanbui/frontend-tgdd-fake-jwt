import actionTypes from "./actionTypes";



export const LoginOutUser = (data1) => {
    return async (dispatch, getState) => {
        try {

            dispatch({
                type: actionTypes.USER_LOGIN_OUT,


            })



        } catch (e) {
            console.log(e)

        }
    }
}