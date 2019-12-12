var bmifunction = require('../bmiFunctions.js')

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'male', '90', '110',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.82")
            expect(data.whrClassification).toBe('normal weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'male', '89', '100',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.89")
            expect(data.whrClassification).toBe('normal weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'male', '90', '100',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.90")
            expect(data.whrClassification).toBe('over-weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'male', '106', '110',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.96")
            expect(data.whrClassification).toBe('over-weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'male', '99', '100',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.99")
            expect(data.whrClassification).toBe('over-weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'male', '100', '100',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("1.00")
            expect(data.whrClassification).toBe('obesity')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'male', '115', '110',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("1.05")
            expect(data.whrClassification).toBe('obesity')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'female', '80', '110',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.73")
            expect(data.whrClassification).toBe('normal weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'female', '79', '100',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.79")
            expect(data.whrClassification).toBe('normal weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'female', '80', '100',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.80")
            expect(data.whrClassification).toBe('over-weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'female', '90', '110',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.82")
            expect(data.whrClassification).toBe('over-weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'female', '84', '100',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.84")
            expect(data.whrClassification).toBe('over-weight')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'female', '85', '100',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.85")
            expect(data.whrClassification).toBe('obesity')
        })
})

test('weight: 1, height: 1 so bmi should be 10000', () => {
    bmifunction.bmiCalc(1, 1, 'true', 'female', '100', '110',
        function (data) {
            throw new Error("Fail")
        },
        function (data) {
            expect(data.whr.toFixed(2)).toBe("0.91")
            expect(data.whrClassification).toBe('obesity')
        })
})

