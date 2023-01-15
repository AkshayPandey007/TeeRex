import { FILTER_PRODUCT, GET_CART_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, REMOVE_CART_ITEM, SEARCH_ITEM } from "./action.type"
import { store } from "./store"

const initState={
    productData : [],
    isLoading : false,
    isError : false,
    cartData:[],
    productDataCopy:[]
}

export const reducer =(oldState=initState , action)=>{
    const {type , payload}=action

    switch(type) {
        case GET_PRODUCTS_REQUEST:
            return{
                ...oldState,
                isLoading : true,
                isError : false,
            }

            case GET_PRODUCTS_SUCCESS:
                return{
                    ...oldState,
                    productData : payload,
                    productDataCopy:payload,
                    isLoading : false,
                    isError : false,
                }

                case GET_CART_SUCCESS:
                    
                    return{
                        ...oldState,
                        cartData:[...oldState.cartData,payload],
                        isLoading : false,
                        isError : false
                    }

                case GET_PRODUCTS_FAILURE:
                    return{
                        ...oldState,
                        isLoading : false,
                        isError : true,
                    }

                    case REMOVE_CART_ITEM:
                        return{
                            ...oldState,
                            cartData:oldState.cartData.filter((el)=>el.id!==payload)
                        }



                    case SEARCH_ITEM:
                        if(payload=="")
                        {
                            return{...oldState,productData:oldState.productDataCopy}
                        }
                        else{
                            return{
                                ...oldState,
                                productData:oldState.productDataCopy.filter((el)=>(
                                    el.color.toLowerCase()===payload || el.name.toLowerCase()===payload || el.type.toLowerCase()===payload
                                ))
                            }
                        }


                    case FILTER_PRODUCT:
                        if(payload=="low")
                        {
                            return{
                                ...oldState,
                                productData:oldState.productData.filter((el)=>(
                                    el.price<=250
                                ))
                            }
                        }

                        else if(payload=="medium")
                        {
                            return{
                                ...oldState,
                                productData:oldState.productData.filter((el)=>(
                                    el.price>250 && el.price<=450
                                ))
                            }
                        }

                        else if(payload=="high")
                        {
                            return{
                                ...oldState,
                                productData:oldState.productData.filter((el)=>(
                                    el.price>450
                                ))
                            }
                        }
                        else{
                            return{
                                ...oldState,
                                productData:oldState.productData.filter((el)=>(
                                    el.color==payload || el.type==payload || el.gender==payload
                                ))
                            }
                        }

            default :
            return oldState
            
    }
}