/**
 * Created by Administrator on 2017/5/1.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Index from './index'
import Destination from './Destination'
import Plan from './Plan'
import Detail from './Detail'
import * as TodoActions from '../actions'
import PropTypes from 'prop-types'
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

const Basic = ({count}) => (

  <Router count={count}>
    <div className="clear container-main">
      <div className="fl">
        <Menu
          style={{width: 240}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Navigation One</span></span>}>
            <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">购物车</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/topics">购买记录</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>

      <Route exact path="/" component={Index} count={count}/>
      <Route path="/about" component={Destination}/>
      <Route path="/topics" component={Plan}/>
      <Route path="/detail/:topicId" component={Detail}/>
    </div>
  </Router>
)
const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

Basic.PropTypes = {
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
)(Basic)


