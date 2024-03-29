import  axiosInstance  from '../../constants/axiosInstance';
import { ACTION_TYPES } from '../ActionTypes/ActionTypes';
import { selectProgressBarState } from './ProgressBarActions';


export const getBlogs = () => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.get('/api/v1/blog/get-domain-blogs-with-domain-name?domain=thestudenthelpline.co.in')
       
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.GET_BLOGS,
                payload: res.data.data.blogs
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No Blog Found')
            dispatch({
                type: ACTION_TYPES.GET_BLOGS,
                payload: []
            })
        }
    }
}

export const getBlogById= (id) => {
    return async (dispatch) => {
        dispatch(selectProgressBarState(true))
        const res = await axiosInstance.get('/api/v1/blog/getblogbyurl', {
            params: {
                url : id
            }
        })
        if (res.data.success === true) {
            dispatch(selectProgressBarState(false))
            dispatch({
                type: ACTION_TYPES.GET_SINGLE_BLOG,
                payload: res.data.data
            })
        }
        else {
            dispatch(selectProgressBarState(false))
            alert.show('No Blog Found')
            dispatch({
                type: ACTION_TYPES.GET_SINGLE_BLOG,
                payload: []
            })
        }
    }
}