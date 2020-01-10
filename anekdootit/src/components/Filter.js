import React from 'react'
import { updateFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const handleChange = (event) => {
    const filterInput = event.target.value
    props.updateFilter(filterInput)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
	updateFilter
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
        filter: state.filter,
        notifications: state.notifications
	}
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default ConnectedFilter