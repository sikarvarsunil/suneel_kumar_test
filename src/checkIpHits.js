(function() {
    'use strict';

    /**
    * Function to sort an array of objects by some specific key.
    * @param {Object} obj Key of the object to sort.
    */
    const dynamicSort = (obj) => {     
        return function (a,b) {
            return a[obj].localeCompare(b[obj]);      
        }
    }

    /**
    * Function to compare timestamp and amount.
    * @param {Object} data1 the object.
    * @param {Object} data2 the object.
    */
    const compareEqualIp = (data1, data2) => {
        let str1 = data1.timestamp.split(' ')[1],
            str2 = data2.timestamp.split(' ')[1],
            time1 = str1.split(':'),
            time2 = str2.split(':');

        if(time1[0] != time2[0]){
            return false;
            } else if(time1[0] === time2[0] && time1[1] < time2[1]) {
                if (data1.amount < data2.amount) {
                    return 1;
                } else if (data1.amount > data2.amount) {
                    return 0;
                } else if (data1.amount == data2.amount) {
                    return 0;
                }
            }
    }
    /**
    * Function to compare timestamp and amount.
    * @param {array} data the array.
    */
    const checkIpData = (data) => {
        let i = 0, 
            j = 0,
            count=0,
            compareamount,
            sameIp = data.sort(dynamicSort("ip"));
        if (sameIp.length < 2) {
            return sameIp;
        }
        for (i = 0; i < sameIp.length - 1; i++) {
            j = i+1;
            if (sameIp[i].ip == sameIp[j].ip){
              
                count++;
                if (count > 10) {
                    sameIp.splice(i,1);
                    i--; 
                }
                compareamount = compareEqualIp(sameIp[i], sameIp[j]);
                switch(compareamount) {
                    case 0:
                        sameIp.splice(j,1);
                        i--;
                        break;
                    case 1:
                        sameIp.splice(i,1);
                        i--;
                        break;
                }
            } else {
                count = 0;
            } 
        }
        //cb(sameIp);
       // callback function to excute action after filter sample.
        return sameIp;
    }
    module.exports.checkIpData = checkIpData;
}());