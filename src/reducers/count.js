/**
 * Created by Administrator on 2017/5/12.
 */
import {RECEIVE_PRODUCTS, ADD_PRODUCT} from '../constants/ActionTypes'
import { combineReducers } from 'redux'
// const count = (state = [], action) => {
//   switch (action.type) {
//     case RECEIVE_PRODUCTS:
//       return action.products
//     default:
//       return state
//   }
// }
const products = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state
      }
    default:
      return state
  }
}
const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      // const { productId } = action
      // if (productId) {
      //   return {
      //     ...state,
      //     [productId]: products(state[productId], action)
      //   }
      // }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
