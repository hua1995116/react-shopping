/**
 * Created by Administrator on 2017/5/1.
 */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QueueAnim from 'rc-queue-anim'
import { Link } from 'react-router-dom'
import { getVisibleProducts } from '../reducers/count'

const Index = ({count}) => (
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

const mapStateToProps = state => ({
  count: getVisibleProducts(state.count)
})


Index.PropTypes = {
  count: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    mashu: PropTypes.array.isRequired
  })).isRequired
}

export default connect(
  mapStateToProps
)(Index)
