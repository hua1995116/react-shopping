/**
 * Created by Administrator on 2017/5/21.
 */
import {ADD_HISTORY} from '../constants/ActionTypes'

const history = (state = {},action) => {
  switch(action.type) {
    case ADD_HISTORY:
      return {
        ...state,
        [action.id]: action.order
      }
    default:
      return state
  }
}
export default history
