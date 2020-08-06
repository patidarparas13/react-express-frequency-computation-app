const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Frequency Computation
const fetch = require('node-fetch');

let final_output;
let valueOfN;
function getData(valueOfN) {
    let url = "https://terriblytinytales.com/test.txt";

    let settings = {
        method: "Get"
    };
    fetch(url, settings,).then(res => res.text()).then((json) => {
        let text = json
        frequencyComputation(text, valueOfN)
    });

}
function frequencyComputation(data, n) {
    data = data.toLowerCase()
    data = data.split(/\s+/);
    let dataMap = {}
    data.forEach(function (key) {
        if (dataMap.hasOwnProperty(key)) {
            dataMap[key]++;
        } else {
            dataMap[key] = 1;
        }
    });
    var finalWordsCount = {};
    // finalWordsCount = Object.keys(dataMap).map(function (key) {
    //    return {name: key, total: dataMap[key]};
    // });

    finalWordsCount = Object.entries(dataMap).sort((a, b) => b[1] - a[1])

    // finalWordsCount.sort(function (a, b) {
    //    return b.total - a.total;
    // });
    // console.log("Hey",finalWordsCount)
    final_output = finalWordsCount.slice(0, n);
    var objSorted = {}
    final_output.forEach(function (item) {
        objSorted[item[0]] = item[1]
    })
    final_output = objSorted
}


app.post('/api/post', (req, res) => {
    valueOfN = req.body.post
    getData(valueOfN);
    res.send(`We received your request !
    Hang Tight...
    `);
});

// API calls
app.get('/api/get', (req, res) => {
    res.json(final_output);

});


if (process.env.NODE_ENV === 'production') { // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
