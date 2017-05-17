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
            <Menu.Item key="1"><Link to="/">Index</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/topics">Topics</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore"/><span>Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting"/><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>

      <Route exact path="/" component={Index} count={count}/>
      <Route path="/about" component={Destination}/>
      <Route path="/topics" component={Plan}/>
      <Route path="/detal/:topicId" component={Detail}/>
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


