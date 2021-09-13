import React from 'react'
import ReactDOM from 'react-dom'

const modalMountEl = document.getElementById('devices_app_modal')

// Taken from the React docs on Portals
// https://reactjs.org/docs/portals.html
class ModalPortal extends React.Component {
  constructor (props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount () {
    modalMountEl.appendChild(this.el)
  }

  componentWillUnmount () {
    modalMountEl.removeChild(this.el)
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

export default ModalPortal
