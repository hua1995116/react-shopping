/**
 * Created by Administrator on 2017/5/8.
 */
import React from 'react'
import {connect} from 'react-redux'
import { getProduct } from '../reducers/count'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim'

class Destination extends React.Component{


  render(){
    const {cart, count} = this.props
    const carts = cart.addIds.map(id => getProduct(count, id))
    return (
      <div className="cart-list fl">
        <div className="cart-list-title">
          <Row>
            <Col span={8}>
              商品信息
            </Col>
            <Col span={4}>

            </Col>
            <Col span={4}>
              单价
            </Col>
            <Col span={4}>
              数量
            </Col>
            <Col span={4}>
              金额
            </Col>
          </Row>
        </div>
        <QueueAnim type={['right', 'left']}>
          {carts.map(product =>
            <div id={product.id} className="cart-list-li" key={'a'+product.id}>
              <Row>
                <Col span={3}>
                  <div className="img">
                    <img src={'../images/'+product.src} alt=""/>
                  </div>
                </Col>
                <Col span={9}>
                  <div className="text"><Link to={'/detail/'+product.id}>{product.name}</Link></div>
                </Col>
                <Col span={4}>
                  <div className="text">￥{product.price}</div>
                </Col>
                <Col span={4}>
                  <div className="text">{cart.quantityId[product.id]}</div>
                </Col>
                <Col span={4}>
                  <div className="text">￥{cart.quantityId[product.id]*product.price}</div>
                </Col>
              </Row>
            </div>
          )}
        </QueueAnim>
        <div className="total">

          <div className="fr total-all">
            去结算
          </div>
          <div className="fr total-font">
            <span className="total-symbol">&nbsp;￥</span>
            {cart.addIds.reduce((sum, productId) => {
              return sum + count.byId[productId]["price"]*cart.quantityId[productId];
            },0)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count,
  cart: state.cart
})


export default connect(
  mapStateToProps
)(Destination)
