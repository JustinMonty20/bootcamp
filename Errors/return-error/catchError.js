function catchError(fn) {
    try {
       fn();
       return false;
    } catch(err) {
        return err;
    }
}

module.exports = catchError;