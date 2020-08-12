import { API } from "../../backend";


//category calls
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)

    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));

}

//get all category
export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET",
    }).then(response => {
        return response.json()
    })
        .catch(err => console.log(err))
}

///product call

///creaet a product

export const createaProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(response => {
            return response.json();

        })
        .catch(err => console.log(err))
}

//get all product
export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET",
    }).then(response => {
        return response.json()
    })
        .catch(err => console.log(err))
}

//Delete a Product

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }

    }).then(response => {
        return response.json()

    })
        .catch(err => console.log(err))
}


export const deleteCategories = (categoryId, userId, token) => {
    return fetch(`${API}/category/${categoryId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json()

    })
        .catch(err => console.log(err))
}


//get a product
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

//update a product

export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json()

    })
        .catch(err => console.log(err))
}


