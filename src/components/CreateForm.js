import React, { PropTypes, Component } from 'react'

export default class CreateForm extends Component {
    createMark(e) {
        e.preventDefault()
        let titleEl = document.getElementById('creation-mark-name'),
            textEl = document.getElementById('creation-mark-content'),
            title = titleEl.value,
            text = textEl.value;
        titleEl.value = '';
        textEl.value = '';
        this.props.createMark(title, text)
    }
    render() {
        return <form>
            <input type="text" id="creation-mark-name" />
            <input type="button" onClick={this.createMark.bind(this) } value="Создать"/>
            <textarea id="creation-mark-content" style={{ display: 'block' }}></textarea>
        </form>
    }
}

CreateForm.propTypes = {
    createMark: PropTypes.func.isRequired
}