import React, { PropTypes, Component } from 'react'

export default class Menu extends Component {
    findMark(e) {
        e.preventDefault();
        this.props.findMark(document.getElementById('query-field').value);
    }
    render() {
        return <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"> @</span>
            <input id="query-field" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
            <input type="button" value="Найти" onClick={this.findMark.bind(this)}/>
            <input type="button" value="Добавить"/>
        </div>
    }
}

Menu.propTypes = {
    findMark: PropTypes.func.isRequired
}