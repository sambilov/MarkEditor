import React, { PropTypes, Component } from 'react'

export default class Mark extends Component {
    removeMark(id) {
        this.props.removeMark(id)
    }
    render() {
        const { title, text, id } = this.props
        return <div key={id}>
            <h4>{title}</h4>
            <p>{text}</p>
            <button onClick={() =>this.removeMark(id)}>Удалить</button>
        </div>
    }
}

Mark.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    removeMark: PropTypes.func.isRequired
}