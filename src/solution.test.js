const checkIpHits  = require('./checkIpHits.js');
 
 //IP within each one hour period, only the most expensive click is placed into the result set 
let testData1 = [
    { "ip":"11.11.11.11", "timestamp":"3/11/2016 02:12:32", "amount": 6.50 },
    { "ip":"11.11.11.11", "timestamp":"3/11/2016 02:13:11", "amount": 7.25 }
]
let resultData1 = [{"ip":"11.11.11.11","timestamp":"3/11/2016 02:13:11","amount":7.25}]


//If more than one click from the same IP ties for the most expensive click in a one hour period, only place the earliest click into the result set
let testData2 = [
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 02:12:32", "amount": 8 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 02:13:11", "amount": 8 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 02:57:11", "amount": 8 },
  { "ip":"27.11.11.11", "timestamp":"3/11/2016 05:57:11", "amount": 10 },
  { "ip":"27.14.11.11", "timestamp":"3/11/2016 03:57:11", "amount": 7 }
]
let resultData2 = [
  { ip: '11.11.11.11', timestamp: '3/11/2016 02:12:32', amount: 8 },
  { ip: '27.11.11.11', timestamp: '3/11/2016 05:57:11', amount: 10 },
  { ip: '27.14.11.11', timestamp: '3/11/2016 03:57:11', amount: 7 }
]

//If there are more than 10 clicks for an IP in the overall array of clicks, do not include any of those clicks in the result set.
let testData3 = [
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 02:12:32", "amount": 6.50 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 03:13:11", "amount": 7.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 04:13:11", "amount": 4.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 05:13:11", "amount": 11.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 06:13:11", "amount": 12 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 07:13:11", "amount": 2.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 08:13:11", "amount": 3.25 },
  { "ip":"11.15.11.11", "timestamp":"3/11/2016 09:13:11", "amount": 9.25 },
  { "ip":"11.17.11.11", "timestamp":"3/11/2016 10:13:11", "amount": 14.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 11:13:11", "amount": 12.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 12:13:11", "amount": 1.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 13:13:11", "amount": 15.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 14:13:11", "amount": 15.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 15:13:11", "amount": 15.25 },
  { "ip":"11.11.11.11", "timestamp":"3/11/2016 16:13:11", "amount": 15.25 },
]
let resultData3 = [
  { ip: '11.11.11.11', timestamp: '3/11/2016 02:12:32', amount: 6.5 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 03:13:11', amount: 7.25 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 04:13:11', amount: 4.25 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 05:13:11', amount: 11.25 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 06:13:11', amount: 12 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 07:13:11', amount: 2.25 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 08:13:11', amount: 3.25 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 11:13:11', amount: 12.25 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 12:13:11', amount: 1.25 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 13:13:11', amount: 15.25 },
  { ip: '11.11.11.11', timestamp: '3/11/2016 16:13:11', amount: 15.25 },
  { ip: '11.15.11.11', timestamp: '3/11/2016 09:13:11', amount: 9.25 },
  { ip: '11.17.11.11', timestamp: '3/11/2016 10:13:11', amount: 14.25 }
]
describe('toMatchObject applied to arrays', () => {
  test('IP within each one hour period, only the most expensive click is placed into the result set', () => {
    expect(checkIpHits.checkIpData(testData1)).toMatchObject(resultData1);
  });

  test('If more than one click from the same IP ties for the most expensive click in a one hour period, only place the earliest click into the result set', () => {
    expect(checkIpHits.checkIpData(testData2)).toMatchObject(resultData2);
  });

  test('If there are more than 10 clicks for an IP in the overall array of clicks, do not include any of those clicks in the result set.', () => {
    expect(checkIpHits.checkIpData(testData3)).toMatchObject(resultData3);
  });
   
});
