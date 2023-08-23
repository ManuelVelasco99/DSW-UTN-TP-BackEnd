/**
 * @param {*} value numero decimal
 * @returns numero decimal truncando los dos ultimos decimales
 */
const decimalSanitizer = (value) => {
    valueArray = value.split('.');
    if(valueArray.length > 1){
        return valueArray[0] + '.' + valueArray[1].substring(0,2);
    }
    else{
        return value;
    }
}

module.exports = { decimalSanitizer };