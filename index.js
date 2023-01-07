function degree(number,stepen) {
    if(!isNaN(number) && !isNaN(stepen) && number !==null && stepen!==null && stepen > 0) {
        return (stepen === 1) ? number : (number * degree(number, stepen - 1))
    }
        return new Error('в функцію должни вносится только числа більше 0')
}
console.log(degree(4,8))
