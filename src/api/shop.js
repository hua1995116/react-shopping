/**
 * Created by Administrator on 2017/5/15.
 */
import _products from './shop.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
