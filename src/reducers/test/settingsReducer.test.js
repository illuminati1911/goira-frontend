import settingsReducer from "../settingsReducer";

test('Test set ui mode', () => {
    var result = settingsReducer({ darkmode: true }, { type: 'TOGGLE_UI_MODE' })
    expect(result).toEqual({
        darkmode: false
    })

    result = settingsReducer({ darkmode: false }, { type: 'TOGGLE_UI_MODE' })
    expect(result).toEqual({
        darkmode: true
    })

    result = settingsReducer({}, { type: 'TOGGLE_UI_MODE' })
    expect(result).toEqual({
        darkmode: true
    })
})