import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {props.notifications}
    </div>
  )
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
        filter: state.filter,
        notifications: state.notifications
	}
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification