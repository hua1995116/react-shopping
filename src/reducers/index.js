/**
 * Created by Administrator on 2017/5/12.
 */
import { combineReducers } from 'redux'
import count from './count'
import cart from './cart'

const counts = combineReducers({
  count,
  cart
});

export default counts;
