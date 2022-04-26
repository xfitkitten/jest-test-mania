export function clean(phoneNum) {
    let splitPhoneNum = phoneNum.split('')
    
    let phonestring = ""

    for (let digit of splitPhoneNum) {
        isAlpha(digit)
        if (Number.isInteger(parseInt(digit))) {
            phonestring+=digit
        } 
    }
    if (phonestring.length == 9 || phonestring.length > 11) {
        throw new Error('Incorrect number of digits')
    }
    if (phonestring.length == 11) {
     if (phonestring[0] != 1) {
        throw new Error('11 digits must start with 1')
    }
    phonestring = phonestring.slice(1)
}
    return phonestring
}
function isAlpha(ch) {
    if (/^[A-Z]$/i.test(ch)) {
        throw new Error('Letters not permitted')
    }
}
