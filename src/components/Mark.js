import React, { PropTypes, Component } from 'react'

export default class Mark extends Component {
    render() {
        const { title, text, id } = this.props
        return <div key={id}>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    }
}

Mark.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}