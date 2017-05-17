/**
 * Created by Administrator on 2017/5/12.
 */
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  // shop.getProducts(products => {
  //   console.log(products)
  //   dispatch(receiveProducts(products))
  // })
  fetch('../api/shop.json')
    .then(response => response.json())
    .then(json => dispatch(receiveProducts(json)))
}

export const inaddproduct = productId => ({
  type: types.ADD_PRODUCT,
  productId: productId
})


export const addcount = (productId) => {
  dispatch(types.ADD_COUNT, productId)
}

export const deccount = (productId) => dispatch => {
  dispatch(types.DEC_COUNT, productId)
}
