class ValidationContract {
    constructor() {
        this.errors = [];
    }

    isRequired(value, message) {
        if (!value || value.length <= 0) { this.errors.push({ message: message }); }
    }

    isValidValue(value, validValues, message) {
        if (!validValues.includes(value)) { this.errors.push({ message: message }); }
    }

    isCreditCard(value, message){
        const reg = new RegExp('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$');
        if (!reg.test(value)) { this.errors.push({ message: message }); }
    }

    exists(value, message) {
        if (value === undefined) { this.errors.push({ message: message }); }
    }

    hasMinLen(value, min, message) {
        if (!value || value.length < min) { this.errors.push({ message: message }); }
    }

    addError(message) {
        this.errors.push({ message: message });
    }

    hasMaxLen(value, max, message) {
        if (!value || value.length > max) { this.errors.push({ message: message }); }
    }

    isFloat(value, message) {
        const floatValue = parseFloat(value);
        if (Number.isNaN(floatValue)) {
            this.errors.push({ message: message });
        }
    }

    isFixedLen(value, len, message) {
        if (value.length !== len) { this.errors.push({ message: message }); }
    }

    isMinimumVal(value, minimumValue, message) {
        const floatValue = parseFloat(value);
        if (floatValue < minimumValue) {
            this.errors.push({ message: message });
        }
    }

    isEmail(value, message) {
        const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
        if (!reg.test(value)) { this.errors.push({ message: message }); }
    }

    clear() { return this.errors = []; }
    isValid() { return this.errors.length === 0; }
}

module.exports = ValidationContract;
