const sumPass = require('./sumPass')
const sumFail = require('./sumFail')

test("Adds two numbers",() => {
    expect(
        sumPass(1,2)
    ).toBe(3)
})

test("Adds two numbers",() => {
    expect(
        sumFail(1,2)
    ).toBe(3)
})