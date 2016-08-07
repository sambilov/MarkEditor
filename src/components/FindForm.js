import React, { PropTypes, Component } from 'react'

export default class FindForm extends Component {
    findMark(e) {
        e.preventDefault();
        this.props.findMark(document.getElementById('query-field').value);
    }
    render() {
        return <form>
            <input id="query-field" type="text"/>
            <input type="button" value="Найти" onClick={this.findMark.bind(this) }/>
        </form>
    }
}

FindForm.propTypes = {
    findMark: PropTypes.func.isRequired
}