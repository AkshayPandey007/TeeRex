// import axios from "axios"
import { FILTER_PRODUCT, GET_CART_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, REMOVE_CART_ITEM, SEARCH_ITEM } from "./action.type"

export const getProductRequest = ()=>{
    return{
        type : GET_PRODUCTS_REQUEST
    }
}

export const getProductSuccess = (payload)=>{
    return{
        type : GET_PRODUCTS_SUCCESS , payload
    }
}

export const getProductFailure= ()=>{
    return{
        type : GET_PRODUCTS_FAILURE
    }
}


export const getCartSuccess=(payload)=>{
    return{
        type : GET_CART_SUCCESS , payload
    }
}



export const removeItem=(payload)=>{
    return {
        type: REMOVE_CART_ITEM,payload
    }
}


export const searchItem=(payload)=>{
    return{
        type:SEARCH_ITEM,payload
    }
}


export const filterItem=(payload)=>{
    return{
        type:FILTER_PRODUCT,payload
    }
}


export const getProduct =()=> (dispatch)=>{
    dispatch(getProductRequest())

    return fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    .then((r)=> r.json())
    .then((r)=>{
        dispatch(getProductSuccess(r))
    })
    .catch((e)=>{
        dispatch(getProductFailure(e))
    })
}