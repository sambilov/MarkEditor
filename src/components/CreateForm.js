import React, { PropTypes, Component } from 'react'

export default class CreateForm extends Component {
    createMark(e) {
        e.preventDefault()
        this.props.createMark()
    }
    render() {
        return <form>
            <input type="text" />
            <input type="button" onClick={this.createMark.bind(this) } value="Создать"/>
            <textarea style={{ display: 'block' }}></textarea>
        </form>
    }
}

CreateForm.propTypes = {
    createMark: PropTypes.func.isRequired
}