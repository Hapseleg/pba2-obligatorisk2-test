const timeout = 5000

//normal weight
describe(
    '/ (Bmi page - height:200, weight:70, gender:male, waist:90, hip:110)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=male&waist=90&hip=110')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.82 WHR and classification normal weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.82')
            expect(whrClassification).toBe('normal weight')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:70, gender:male, waist:89, hip:100)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=male&waist=89&hip=100')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.89 WHR and classification normal weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.89')
            expect(whrClassification).toBe('normal weight')
        })
    },
    timeout,
)

//over-weight
describe(
    '/ (Bmi page - height:200, weight:70, gender:male, waist:90, hip:100)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=male&waist=90&hip=100')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.90 WHR and classification over-weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.9')
            expect(whrClassification).toBe('over-weight')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:70, gender:male, waist:106, hip:110)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=male&waist=106&hip=110')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.96 WHR and classification over-weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.96')
            expect(whrClassification).toBe('over-weight')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:70, gender:male, waist:99, hip:100)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=male&waist=99&hip=100')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.99 WHR and classification over-weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.99')
            expect(whrClassification).toBe('over-weight')
        })
    },
    timeout,
)

//obese
describe(
    '/ (Bmi page - height:200, weight:70, gender:male, waist:100, hip:100)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=male&waist=100&hip=100')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 1 WHR and classification obesity', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('1')
            expect(whrClassification).toBe('obesity')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:70, gender:male, waist:115, hip:110)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=male&waist=115&hip=110')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 1.05 WHR and classification obesity', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('1.05')
            expect(whrClassification).toBe('obesity')
        })
    },
    timeout,
)

//females
//normal-weight
describe(
    '/ (Bmi page - height:200, weight:70, gender:female, waist:80, hip:110)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=female&waist=80&hip=110')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.73 WHR and classification normal weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.73')
            expect(whrClassification).toBe('normal weight')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:70, gender:female, waist:79, hip:100)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=female&waist=79&hip=100')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.79 WHR and classification normal weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.79')
            expect(whrClassification).toBe('normal weight')
        })
    },
    timeout,
)

//over-weight
describe(
    '/ (Bmi page - height:200, weight:70, gender:female, waist:80, hip:100)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=female&waist=80&hip=100')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.8 WHR and classification over-weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.8')
            expect(whrClassification).toBe('over-weight')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:70, gender:female, waist:90, hip:110)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=female&waist=90&hip=110')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.82 WHR and classification over-weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.82')
            expect(whrClassification).toBe('over-weight')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:70, gender:female, waist:84, hip:100)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=female&waist=84&hip=100')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.84 WHR and classification over-weight', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.84')
            expect(whrClassification).toBe('over-weight')
        })
    },
    timeout,
)

//obese
describe(
    '/ (Bmi page - height:200, weight:70, gender:female, waist:100, hip:100)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=female&waist=100&hip=100')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 1 WHR and classification obesity', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('1')
            expect(whrClassification).toBe('obesity')
        })
    },
    timeout,
)

describe(
    '/ (Bmi page - height:200, weight:70, gender:female, waist:100, hip:110)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080/result?cm=200&kg=70&calculateWHR=true&gender=female&waist=100&hip=110')
            await page.waitFor(3000);
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should show 0.91 WHR and classification obesity', async () => {
            let whr = await page.evaluate(() => document.querySelector('#whr').innerText)
            let whrClassification = await page.evaluate(() => document.querySelector('#whrClassification').innerText)
            expect(whr).toBe('0.91')
            expect(whrClassification).toBe('obesity')
        })
    },
    timeout,
)