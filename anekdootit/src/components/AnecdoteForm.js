import React from 'react'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        props.newAnecdote(anecdote)
        event.target.anecdote.value = ''
    }

    return (
        <form onSubmit={addAnecdote}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
        </form>
    )
}

const mapDispatchToProps = {
	newAnecdote
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
        filter: state.filter,
        notifications: state.notifications
	}
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm