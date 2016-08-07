import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Mark from '../components/Mark'
import Menu from '../containers/Menu'
import * as menuActions from '../actions/MenuActions'

class App extends Component {
  render() {
    const markList = this.props.markList;
    const {findMark} = this.props.menuActions
    const markTemplate = markList.map(function (item) {
      return (
        <Mark title={item.title} text={item.text} id= {item.id}/>
      )
    })
    return <div class="container">
      <Menu findMark={findMark}/>
      <div class="row">
        <div class="col-md-12">
          {markTemplate}
        </div>
      </div>
      <div>

      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    queryString: state.queryString,
    markList: state.markList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    menuActions: bindActionCreators(menuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)