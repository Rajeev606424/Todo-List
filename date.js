exports.getDate = function() {
    const today = new Date;

    const options = {
        weekday: 'short',
        day: 'numeric',
        month: 'long'
    };

    return today.toLocaleDateString("en-IN", options);

}

exports.getDay = getDay;

function getDay() {
    const today = new Date;

    const options = {
        weekday: 'long'
    };

    return today.toLocaleDateString("en-IN", options);

}


// there are 2 ways of writing a function first 1 is shorter which uses anonymus function
// while other one is more old school one