import imageApi from "../api/imageApi"
import * as types    from "./actionTypes"

export function startFetchingImages () {
    return {type : types.START_FETCHING_IMAGES}
}

export function getAllImages() {
    return (dispatch) => {
        return imageApi.getImages().then(data => {
            dispatch(getAllImagesSuccess(data))
        }).catch(error => {
            dispatch(getAllImagesError())
        })
    } 
}

export function getAllImagesSuccess(data) {
    return {type : types.GET_IMAGE_SUCCESS , payload : data }
}

export function getAllImagesError() {
    return {type : types.GET_IMAGE_ERROR }
}

export function addToFav(mediaId) {
    return (dispatch) => {
        return imageApi.addToFav(mediaId).then(res => {
            dispatch(getAllImages())
        })
    }
}

export function removeFromfav (mediaId) {
    return (dispatch) => {
        return imageApi.removeFromfav(mediaId).then(res => {
            dispatch(getAllImages())
        })
    }
}
