const timeout = 5000

describe(
    '/ (Bmi page - height:1, weight:1)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=1&kg=1')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('the result page should show a BMI of 10000', async () => {
            let bmi = await page.evaluate(() => document.querySelector('#bmi').innerText)
            expect(bmi).toBe("10000")
            // expect(text).toContain('10000')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:0, weight:1)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=0&kg=1')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should redirect to the main page (http://localhost:8080/)', async () => {
            let text = await page.evaluate(() => document.body.textContent)
            expect(text).toContain('Please enter your details!')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:A, weight:1)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=A&kg=1')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should redirect to the main page (http://localhost:8080/)', async () => {
            let text = await page.evaluate(() => document.body.textContent)
            expect(text).toContain('Please enter your details!')
        })
    },
    timeout,
)


