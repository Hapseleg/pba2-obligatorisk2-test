var bmifunction = require('../bmiFunctions.js')

test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(200, 70, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(17.5)
            expect(data.bmiGroup).toBe('Underweight')
        })
})

test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(1000, 1849, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(18.49)
            expect(data.bmiGroup).toBe('Underweight')
        })
})


test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(1000, 1850, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(18.5)
            expect(data.bmiGroup).toBe('Healthy weight')
        })
})


test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(200, 80, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(20)
            expect(data.bmiGroup).toBe('Healthy weight')
        })
})


test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(1000, 2449, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(24.49)
            expect(data.bmiGroup).toBe('Healthy weight')
        })
})


test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(1000, 2500, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(25)
            expect(data.bmiGroup).toBe('Overweight')
        })
})


test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(200, 110, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(27.5)
            expect(data.bmiGroup).toBe('Overweight')
        })
})


test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(1000, 2999, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(29.99)
            expect(data.bmiGroup).toBe('Overweight')
        })
})


test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(1000, 3000, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(30)
            expect(data.bmiGroup).toBe('Obese')
        })
})


test('height:200, weight:70 - so bmi group should be ', () => {
    bmifunction.bmiCalc(200, 130, '', '', '', '',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.bmi).toBe(32.5)
            expect(data.bmiGroup).toBe('Obese')
        })
})

