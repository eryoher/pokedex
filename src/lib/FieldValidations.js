export function validateField(value, type) {
    let result = false;
    switch (type) {
        case 'VAL>0':
            if (parseFloat(value) > 0) {
                result = true;
            }
            break;

        default:
            break;
    }

    return result;
}