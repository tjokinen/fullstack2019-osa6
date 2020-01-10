const initialState = ''

const reducer = (state = initialState, action) => {

    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'NOTIFICATION':
            return action.data.message
        default:
            return state
    }
}

export const newNotification = (message) => {
    return ({
        type: 'NOTIFICATION',
        data: { message }
    })
}

export default reducer