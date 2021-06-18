const isUpperCase = ch => {
    if (!isNaN(ch * 1)) {
        return false;
    }
    else {
        if (ch === ch.toUpperCase()) {
            return true;
        }
        if (ch === ch.toLowerCase()) {
            return false;
        }
    }
}

const isAlphanumeric = str => {
    const alphanumeric = new RegExp(/^[a-z0-9]+$/i);
    if (typeof str === 'string') {
        if (alphanumeric.test(str)) {
            return true;
        }
    }
    return false;
}

export {
    isUpperCase,
    isAlphanumeric,
}
