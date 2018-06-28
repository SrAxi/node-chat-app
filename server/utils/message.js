const moment = require('moment');

let generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment(moment().valueOf()).format('h:m')
    };
};

let generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment(moment().valueOf()).format('h:m')
    };
};

module.exports = { generateMessage, generateLocationMessage };
