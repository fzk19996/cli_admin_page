// const Mock = require('mock.js')
// const fs = require('fs')
// const path = require('path')

// function GetJsonFile(file_path) {
//     var json = fs.readFileSync(path.resolve(__dirname, file_path), 'utf-8');
//     return JSON.parse(json);
// }

// module.exports = function(app) {
//     app.get('GetTripData', (rep, res) => {
//         const TripDataList = GetJsonFile('./MockData/TripMockData.json');
//         res.json(Mock.mock(TripDataList));
//     })
// }

import Mock from 'mockjs'

import trip_data from '../MockData/TripMockData.json'

Mock.mock('/api/GetTripData', 'get', {trip_data })