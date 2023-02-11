function catchError(fn) {
    try {
       console.log('x') 
       fn();
    } catch(err) {
        console.log(err);
    }
}

module.exports = catchError;