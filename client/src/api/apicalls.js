import { API } from '../backend'

export const uploadData = (data) => {
    return fetch(`${API}/add/image`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: data
    }).then(response => response.json())
        .catch(err => console.log(err))
}

export const getImages = () => {
    return fetch(`${API}/images`, {
        method: 'GET'
    }).then(response => response.json())
        .catch(err => console.log(err))
}

export const getImageUrl = (imageId) => {
    const url = imageId ? `${API}/image/${imageId}` : 'https://carrborotropicals.com/wp-content/uploads/2020/10/LcGoldDiggerFuchsMandarin.jpg'
    return url
}