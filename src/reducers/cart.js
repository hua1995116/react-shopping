/**
 * Created by Administrator on 2017/5/15.
 */
import {ADD_PRODUCT, DEL_PRODUCT, DEL_COUNT, CLEAR_PRODUCT} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [
        ...state,
        action.productId
      ]
    case DEL_PRODUCT:
      var id = state.indexOf(action.productId)
      state.splice(id, 1)
      return state
    case CLEAR_PRODUCT:
      state = []
      return state
    default:
      return state


  }
}
const quantityId = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      var {productId} = action
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      };
    case DEL_COUNT:
      var {productId} = action
      if (state[productId] === 1) {
        delete state[productId]
        return {
          ...state
        }
      }
      return {
        ...state,
        [productId]: state[productId] - 1
      }
    case CLEAR_PRODUCT:
      state = {}
      return state
    default:
      return state
  }
}


const cart = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        addIds: addIds(state.addIds, action),
        quantityId: quantityId(state.quantityId, action)
      }
  }
}
export default cart
