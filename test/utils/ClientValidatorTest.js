var ClientValidator = require('../../utils/ClientValidator');
var assert = require('assert');

var VALID_CPF = "11438374798";
var INVALID_CPF = "11438374790";

var VALID_NAME = "Mr Godo";
var INVALID_NAME = "1230fdfjoa";

var VALID_EMAIL = "godo1@godo.com";
var INVALID_EMAIL = "godo1@godo";

var VALID_MARITAL_STATUS = "single";
var INVALID_MARITAL_STATUS = "available";

var VALID_ADDRESS = "123 rue des Saules";
var INVALID_ADDRESS = "";

var VALID_PHONE_NUMBERS = ["11231234567", "11231234560"];
var INVALID_PHONE_NUMBERS = ["FF231234237", "112312360"];

describe("ValidClientValidation", function () {
    it("should return true when every information is valid", function () {
        var client = {cpf: VALID_CPF,
            name: VALID_NAME,
            email: VALID_EMAIL,
            maritalStatus: VALID_MARITAL_STATUS,
            address: VALID_ADDRESS,
            phoneNumbers: VALID_PHONE_NUMBERS
        };
        assert.ok(ClientValidator.validate(client));
    });
});


describe("InvalidCpfClientValidation", function () {
    it("should return false when cpf is invalid", function () {
        var client = {cpf: INVALID_CPF,
            name: VALID_NAME,
            email: VALID_EMAIL,
            maritalStatus: VALID_MARITAL_STATUS,
            address: VALID_ADDRESS,
            phoneNumbers: VALID_PHONE_NUMBERS
        };
        assert.ok(!ClientValidator.validate(client));
    });
});

describe("InvalidNameClientValidation", function () {
    it("should return false when name is invalid", function () {
        var client = {cpf: VALID_CPF,
            name: INVALID_NAME,
            email: VALID_EMAIL,
            maritalStatus: VALID_MARITAL_STATUS,
            address: VALID_ADDRESS,
            phoneNumbers: VALID_PHONE_NUMBERS
        };
        assert.ok(!ClientValidator.validate(client));
    });
});

describe("InvalidEmailClientValidation", function () {
    it("should return false when email is invalid", function () {
        var client = {cpf: VALID_CPF,
            name: VALID_NAME,
            email: INVALID_EMAIL,
            maritalStatus: VALID_MARITAL_STATUS,
            address: VALID_ADDRESS,
            phoneNumbers: VALID_PHONE_NUMBERS
        };
        assert.ok(!ClientValidator.validate(client));
    });
});

describe("InvalidMaritalStatusClientValidation", function () {
    it("should return false when marital status is invalid", function () {
        var client = {cpf: VALID_CPF,
            name: VALID_NAME,
            email: VALID_EMAIL,
            maritalStatus: INVALID_MARITAL_STATUS,
            address: VALID_ADDRESS,
            phoneNumbers: VALID_PHONE_NUMBERS
        };
        assert.ok(!ClientValidator.validate(client));
    });
});

describe("InvalidAddressClientValidation", function () {
    it("should return false when address is invalid", function () {
        var client = {cpf: VALID_CPF,
            name: VALID_NAME,
            email: VALID_EMAIL,
            maritalStatus: VALID_MARITAL_STATUS,
            address: INVALID_ADDRESS,
            phoneNumbers: VALID_PHONE_NUMBERS
        };
        assert.ok(!ClientValidator.validate(client));
    });
});

describe("InvalidPhoneNumbersClientValidation", function () {
    it("should return false when phone numbers are invalid", function () {
        var client = {cpf: VALID_CPF,
            name: VALID_NAME,
            email: VALID_EMAIL,
            maritalStatus: VALID_MARITAL_STATUS,
            address: VALID_ADDRESS,
            phoneNumbers: INVALID_PHONE_NUMBERS
        };
        assert.ok(!ClientValidator.validate(client));
    });
});