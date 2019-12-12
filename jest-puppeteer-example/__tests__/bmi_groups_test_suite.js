const timeout = 5000

//underweight - Your BMI is less than 18.5
describe(
    '/ (Bmi page - height:200, weight:70)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 17.5 and the group underweight', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('17.5')
            expect(bmiGroup).toBe('Underweight')
            
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:1000, weight:1849)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=1000&kg=1849')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 18.49 and the group underweight', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('18.49')
            expect(bmiGroup).toBe('Underweight')
            
        })
    },
    timeout,
)

//Healthy weight - Your BMI is more or equal 18.5 and less than 25
describe(
    '/ (Bmi page - height:1000, weight:1850)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=1000&kg=1850')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 18.5 and the group Healthy weight', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('18.5')
            expect(bmiGroup).toBe('Healthy weight')
            
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:80)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=80')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 20 and the group Healthy weight', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('20')
            expect(bmiGroup).toBe('Healthy weight')
            
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:1000, weight:2449)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=1000&kg=2449')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 24.49 and the group Healthy weight', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('24.49')
            expect(bmiGroup).toBe('Healthy weight')
            
        })
    },
    timeout,
)

//overweight - Your BMI is more or equal 25 and less than 30
describe(
    '/ (Bmi page - height:1000, weight:2500)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=1000&kg=2500')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 25 and the group overweight', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('25')
            expect(bmiGroup).toBe('Overweight')
            
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:110)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=110')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 18.5 and the group overweight', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('27.5')
            expect(bmiGroup).toBe('Overweight')
            
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:1000, weight:2999)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=1000&kg=2999')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 29.99 and the group overweight', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('29.99')
            expect(bmiGroup).toBe('Overweight')
            
        })
    },
    timeout,
)
//obese - Your bmi is 30 or higher
describe(
    '/ (Bmi page - height:1000, weight:3000)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=1000&kg=3000')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 30 and the group obese', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('30')
            expect(bmiGroup).toBe('Obese')
            
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:130)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=130')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should result in a bmi of 32.5 and the group obese', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            let bmiGroup = await page.evaluate(() => document.querySelector('#bmiGroup').innerText)
            expect(bmi).toBe('32.5')
            expect(bmiGroup).toBe('Obese')
            
        })
    },
    timeout,
)
