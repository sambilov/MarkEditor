import React, { PropTypes, Component } from 'react'

export default class Mark extends Component {
    removeMark(id) {
        this.props.removeMark(id)
    }
    render() {
        const { title, text, id } = this.props
        const hStyle = {
            marginRight: '10px',
            marginTop: '20px',
            marginBottom: '5px'
        }
        return <div key={id}>
            <h4 style={hStyle}>{title}
                <button onClick={() => this.removeMark(id) }>Редактировать</button>
                <button onClick={() => this.removeMark(id) }>Удалить</button>
            </h4>
            <p style={{ marginTop: '5px' }}>{text}</p>
        </div>
    }
}

Mark.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    removeMark: PropTypes.func.isRequired
}