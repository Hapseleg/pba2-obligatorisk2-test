var express = require("express");

// create express app
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.render("pages/landing");
});

app.get("/result", (req, res) => {
    require('./bmiFunctions.js').bmiCalc(req.query.cm, req.query.kg, req.query.calculateWHR, req.query.gender, req.query.waist, req.query.hip,
        function () {
            res.redirect("/");
        },
        function (obj) {
            res.render("pages/result", obj);
        })
    // var m = (parseInt(req.query.cm, 10) / 100);
    // // console.log(req.query)

    // var kg = req.query.kg;
    // var calculateWHR = req.query.calculateWHR;

    // if (m == 0 || isNaN(m)) {
    //     res.redirect("/");
    // } else {
    //     var bmi = (kg / (m * m));

    //     var bmiGroup
    //     if (bmi < 18.5)
    //         bmiGroup = 'Underweight'
    //     else if (bmi < 25)
    //         bmiGroup = 'Healthy weight'
    //     else if (bmi < 30)
    //         bmiGroup = 'Overweight'
    //     else
    //         bmiGroup = 'Obese'

    //     // console.log(bmiGroup)
    //     var whr
    //     var whrClassification
    //     if (calculateWHR) {
    //         whr = req.query.waist / req.query.hip
    //         if (req.query.gender == "male") {
    //             if (whr < 0.9)
    //                 whrClassification = 'normal weight'
    //             else if (whr < 1)
    //                 whrClassification = 'over-weight'
    //             else
    //                 whrClassification = 'obesity'
    //         }
    //         else {//female
    //             if (whr < 0.8)
    //                 whrClassification = 'normal weight'
    //             else if (whr < 0.85)
    //                 whrClassification = 'over-weight'
    //             else
    //                 whrClassification = 'obesity'
    //         }
    //     }

    //     res.render("pages/result", {
    //         bmi: bmi,
    //         bmiGroup: bmiGroup,
    //         whr: whr,
    //         whrClassification: whrClassification
    //     });
    // }
});

var port = 8080;
console.log("App is running on http://localhost:" + port)
app.listen(port);
