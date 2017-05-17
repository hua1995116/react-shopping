/**
 * Created by Administrator on 2017/5/15.
 */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as TodoActions from '../actions'
import PropTypes from 'prop-types'
import {getVisibleProducts} from '../reducers/count'

class Detail extends React.Component {

  handleradd = () => {
    const {match, dispatch} = this.props
    // this.props.actions.addproduct('ADD_PRODUCT', match.params.topicId)
    dispatch(TodoActions.inaddproduct(match.params.topicId))
  }

  render() {
    const {match, count, cart} = this.props;
    const product = count[match.params.topicId - 1];
    var aa;
    if (cart.addIds.indexOf(match.params.topicId) !== -1) {
      aa = <div>
        <button onClick={ this.handleradd }>+</button>
        {cart.quantityId[match.params.topicId]}
        <button>-</button>
      </div>
    } else {
      aa = <button onClick={ this.handleradd }>add</button>
    }
    return (
      <div>
        {match.params.topicId}
        {product.name}
        {aa}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: getVisibleProducts(state.count),
  cart: state.cart
})

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(TodoActions, dispatch)
// })

Detail.PropTypes = {
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
  mapStateToProps
)(Detail)
