const settingsReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_UI_MODE':
            return {...state, darkmode: !state.darkmode}
        default:
            return state
    }
}

export default settingsReducer