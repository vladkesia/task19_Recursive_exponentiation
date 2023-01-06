function degree(number,stepen) {
    if(!isNaN(number) && !isNaN(stepen) && number !==null && stepen!==null) {
        return (stepen === 1) ? number : (number * degree(number, stepen - 1))
    }else {
        return new Error('в функцію должни вносится только числа')
    }
}
console.log(degree(2,2))
