import * as apiConfig from "./apiConfig"

class ImageApi {
    static getImages () {
        return fetch(apiConfig.HOST_URL+apiConfig.IMAGES, 
                {method : 'GET',headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        .then(response => {
            return response.json()
        }).catch(error => {
            return error
        });
    }

    static addToFav (mediaId) {
        return fetch(apiConfig.HOST_URL+apiConfig.LIKS+"/"+mediaId, 
                {method : 'POST',headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        .then(response => {
            return response.json()
        }).catch(error => {
            return error
        });
    }

    static removeFromfav (mediaId) {
        return fetch(apiConfig.HOST_URL+apiConfig.LIKS+"/"+mediaId, 
                {method : 'DELETE',headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        .then(response => {
            return response.json()
        }).catch(error => {
            return error
        });
    }
}

export default ImageApi 