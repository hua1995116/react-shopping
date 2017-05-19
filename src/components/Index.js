/**
 * Created by Administrator on 2017/5/1.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import PropTypes from 'prop-types'
import QueueAnim from 'rc-queue-anim'
import { Link } from 'react-router-dom'
import { getVisibleProducts } from '../reducers/count'

class Index extends React.Component{

  render(){
    const { count } = this.props;
    return (
      <div className="container fl main-index">
        <QueueAnim>
        {count.map(product =>
          <div id={product.id} className="product-list fl" key={'a'+product.id}>
            <img src={'../images/'+product.src} alt=""/>
            <p>{product.price}</p>
            <Link to={'/detail/'+product.id}>{product.name}</Link>
          </div>
        )}
        </QueueAnim>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: getVisibleProducts(state.count)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

Index.PropTypes = {
  count: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mashu: PropTypes.array.isRequired
  })).isRequired,
  actions: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
