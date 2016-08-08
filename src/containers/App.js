import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Mark from '../components/Mark'
import FindForm from '../components/FindForm'
import CreateForm from '../components/CreateForm'
import * as markActions from '../actions/MarkActions'

class App extends Component {
  render() {
    const {markList, queryString} = this.props;
    const {findMark, createMark, removeMark} = this.props.markActions
    const markTemplate = markList.map(function (item) {
      return (
        <Mark title={item.title} text={item.text} id= {item.id} removeMark={removeMark}/>
      )
    })
    return <div className="container">
      <FindForm findMark={findMark} queryString={queryString}/>
      <CreateForm createMark={createMark}/>
      <div className="row">
        <div className="col-md-12">
          {markTemplate}
        </div>
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
    markActions: bindActionCreators(markActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)