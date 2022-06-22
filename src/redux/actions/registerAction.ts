import { ApiPostNoAuth } from '../../helper/API/ApiData'
import { IS_LOADING, REGISTER, REGISTER_ERROR, REGISTER_LOADING } from '../types'

export const registerAction = (body: any) => async (dispatch: any) => {
    try {
        dispatch({
            type: IS_LOADING,
            payload: true
        })
        dispatch({
            type: REGISTER_LOADING,
            payload: true
        })
        await ApiPostNoAuth(`users/add_user`, body)
            .then((res: any) => {
                dispatch({
                    type: REGISTER,
                    payload: res
                })
            }).catch((error) => {
                console.log(error);
            })
        dispatch({
            type: REGISTER_LOADING,
            payload: false
        })

        dispatch({
            type: IS_LOADING,
            payload: false
        })
    }
    catch (err) {
        dispatch({
            type: REGISTER_ERROR,
            payload: err
        })

        dispatch({
            type: REGISTER_LOADING,
            payload: false
        })

        dispatch({
            type: IS_LOADING,
            payload: false
        })
    }
}