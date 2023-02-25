function toNumber(string) {
    const newNum = Number(string);
    if(!newNum){
        return 0;
    }
    return newNum;
}

module.exports = toNumber;