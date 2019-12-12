var bmifunction = require('../bmiFunctions.js')

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(10000)
        })
})

test('weight: 1, height: 0 so it should fail', () => {
    bmifunction.bmiCalc(0, 1, '', '', '', '',
        function (data) {
            expect(data).toBe(undefined)
        },
        function (data) {
            throw new Error("Fail")
        })
})

test('weight: 1, height: A so it should fail', () => {
    bmifunction.bmiCalc("A", 1, '', '', '', '',
        function (data) {
            expect(data).toBe(undefined)
        },
        function (data) {
            throw new Error("Fail")
        })
})