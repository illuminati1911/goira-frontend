import { toggleUIMode } from "../settingsAction";

test('Test check for ui mode', () => {
    expect(toggleUIMode()).toEqual({
        type: 'TOGGLE_UI_MODE'
    })
})