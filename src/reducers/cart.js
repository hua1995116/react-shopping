/**
 * Created by Administrator on 2017/5/15.
 */
import {ADD_PRODUCT, ADD_COUNT, DEC_COUNT} from '../constants/ActionTypes'

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
    // case ADD_COUNT:
    //   state[action.productId].count++
    //   return state
    // case DEC_COUNT:
    //   if(state[action.productId].count > 0){
    //     state[action.productId].count--
    //     return state
    //   }else{
    //     state.splice(action.productId,1);
    //     return state
    //   }
    default:
      return state
  }
}
const quantityId = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const {productId} = action
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
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
