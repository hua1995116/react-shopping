/**
 * Created by Administrator on 2017/5/8.
 */
import React from 'react'
import {connect} from 'react-redux'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

const Plan = ({count, history}) => {
  const getLocalTime = (nS) =>{
    return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ')
  }
  const list = () => {

    var lis = []
    for(let i in history){
      var mlis = []
      for(let j in history[i]){
        var product = count.byId[j]
        mlis.push(
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
                <div className="text">{history[i][j]}</div>
              </Col>
              <Col span={4}>
                <div className="text">￥{history[i][j]*product.price}</div>
              </Col>
            </Row>
          </div>
        )
      }
      lis.push(
        <div key={'item'+i}>
          <p>{getLocalTime(i)}</p>
          {mlis}
        </div>

      )
    }
    return lis
  }
  return (
    <div className="plan fl">
      {list()}
    </div>
  )
}
const mapStateToProps = state => ({
  count: state.count,
  cart: state.cart,
  history: state.history
})


Plan.PropTypes = {
  count: React.PropTypes.object,
  cart:React.PropTypes.object,
  history:React.PropTypes.object
}

export default connect(
  mapStateToProps
)(Plan)

