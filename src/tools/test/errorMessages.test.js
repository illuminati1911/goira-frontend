import { errorLogin } from "../errorMessages";

test('Test 200', () => {
    var result = errorLogin({ ok: true, status: 200 })
    expect(result).toEqual(null)

    result = errorLogin({ ok: true, status: 401 })
    expect(result).toEqual(null)

    result = errorLogin({ ok: true, status: 500 })
    expect(result).toEqual(null)
})

test('Test 401', () => {
    const result = errorLogin({ ok: false, status: 401 })
    expect(result).toEqual("Invalid password")
})

test('Test 500', () => {
    const result = errorLogin({ ok: false, status: 500 })
    expect(result).toEqual("Login attempt failed")
})