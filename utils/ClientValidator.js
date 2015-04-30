var ClientValidator = function() {
}

ClientValidator.validate = function (client) {
    return areInformationValid(client);
}

var areInformationValid = function(client) {
    return isCpfValid(client.cpf) &&
        isNameValid(client.name) &&
        isEmailValid(client.email) &&
        isMaritalStatusValid(client.maritalStatus) &&
        isAddressValid(client.address) &&
        arePhoneNumbersValid(client.phoneNumbers);
};

var isCpfValid = function(cpf) {
    if (cpf.length != 11) {
        return false;
    }

    var firstDigit = calculateFirstCpfValidationDigit(cpf);
    if (firstDigit != parseInt(cpf.charAt(9))) {
        return false;
    }

    var secondDigit = calculateSecondCpfValidationDigit(cpf);
    if (secondDigit != parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
};

var calculateFirstCpfValidationDigit = function (cpf) {
    var sum = 0;
    for (var i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var firstDigit = 11 - (sum % 11);

    if (firstDigit == 10 || firstDigit == 11) {
        firstDigit = 0;
    }
    return firstDigit;
};

var calculateSecondCpfValidationDigit = function (cpf) {
    var sum = 0;
    for (var i = 1; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    var secondDigit = 11 - (sum % 11);

    if (secondDigit == 10 || secondDigit == 11) {
        secondDigit = 0;
    }
    return secondDigit;
};

var isNameValid = function (name) {
    var lettersRegex = /^[a-zA-Z áéíóúüñç]+$/;
    return name.length > 0 && lettersRegex.test(name);
};

var isEmailValid = function (email) {
    // as seen on http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return emailRegex.test(email);
};

var isMaritalStatusValid = function (maritalStatus) {
    var possibleStatus = [ "single", "married", "divorced", "widowed" ];
    return possibleStatus.indexOf(maritalStatus.toLowerCase()) >= 0;
};

var isAddressValid = function (address) {
    var addressValidationRegex = /^[0-9a-zA-Z áéíóúüñç]+$/;
    return address.length > 0 && addressValidationRegex.test(address);
};

var arePhoneNumbersValid = function (numbers) {
    var valid = true;
    for(var i = 0; i < numbers.length; i++) {
        if(!isPhoneNumberValid(numbers[i])) {
            valid = false;
        }
    }
    return valid;
};

var isPhoneNumberValid = function (number) {
    var digitRegex = /^[0-9]+$/;
    return number.length === 11 && digitRegex.test(number);
};

module.exports = ClientValidator;

