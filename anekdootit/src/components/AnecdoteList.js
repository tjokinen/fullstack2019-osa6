import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { newNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

    const vote = (id, content) => {
        console.log('vote', id)
        props.addVote(id)
        props.newNotification(`You voted for ${content}`)
        setTimeout(() => props.newNotification(''), 5000)
    }

    return (<div>
        {props.anecdotes.map(anecdote => anecdote.content.toUpperCase().includes(props.filter) ? (
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                </div>
            </div>) : (<></>)
        )}
    </div>
    )
}

const mapDispatchToProps = {
    addVote,
    newNotification
}

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
        filter: state.filter,
        notifications: state.notifications
	}
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList