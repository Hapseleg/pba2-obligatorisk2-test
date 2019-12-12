function bmiCalc(cm, kg, calculateWHR, gender, waist, hip, failcallback, successcallback) {
    var m = (parseInt(cm, 10) / 100);

    var kg = kg;
    var calculateWHR = calculateWHR;

    if (m == 0 || isNaN(m)) {
        // console.log("fanget")
        failcallback(undefined)
        // res.redirect("/");
    } else {
        var bmi = (kg / (m * m));

        var bmiGroup
        if (bmi < 18.5)
            bmiGroup = 'Underweight'
        else if (bmi < 25)
            bmiGroup = 'Healthy weight'
        else if (bmi < 30)
            bmiGroup = 'Overweight'
        else
            bmiGroup = 'Obese'

        // console.log(bmiGroup)
        var whr
        var whrClassification
        if (calculateWHR) {
            whr = waist / hip
            if (gender == "male") {
                if (whr < 0.9)
                    whrClassification = 'normal weight'
                else if (whr < 1)
                    whrClassification = 'over-weight'
                else
                    whrClassification = 'obesity'
            }
            else {//female
                if (whr < 0.8)
                    whrClassification = 'normal weight'
                else if (whr < 0.85)
                    whrClassification = 'over-weight'
                else
                    whrClassification = 'obesity'
            }
        }

        var completeObj = {
            bmi: bmi,
            bmiGroup: bmiGroup,
            whr: whr,
            whrClassification: whrClassification
        }
        successcallback(completeObj)
        // res.render("pages/result", {
        //     bmi: bmi,
        //     bmiGroup: bmiGroup,
        //     whr: whr,
        //     whrClassification: whrClassification
        // });
    }
}

function calcBmi(weight, height) {



}

function getBmiGroup(bmi) {

}

function calcWhr(waist, hip) {

}

function getwhrClassification(whr) {

}

module.exports = {
    calcBmi: calcBmi,
    getBmiGroup: getBmiGroup,
    calcWhr: calcWhr,
    getwhrClassification: getwhrClassification,
    bmiCalc: bmiCalc
}