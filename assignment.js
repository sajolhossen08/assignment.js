

// -----Start of kilometerToMeter-----


function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}


// var result = kilometerToMeter(8)
// console.log(result)


// -----End of kilometerToMeter-----


// -----Start of budgetCalculator-----


function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var total = watchPrice + mobilePrice + laptopPrice;
    return total;
}


// var totalCost = budgetCalculator(10, 5, 2)
// console.log(totalCost)


// -----End of budgetCalculator-----


// -----Start of hotelCost-----


function hotelCost(day) {
    if (day > 0 && day <= 10) {
        var price = 100;
        var total = day * price;
        return total;
    } else if (day >= 11 && day <= 20) {
        var price = 80;
        var day = day - 10;
        preTotal = day * price;
        total = preTotal + 1000;
        return total;
    } else(day > 20)
    var price = 50;
    var day = day - 20;
    preTotal = day * price;
    total = preTotal + 1000 + 800;
    return total;

}


// var totalCost = hotelCost(30);
// console.log(totalCost)


// -----End of hotelCost-----


// -----Start of megaFriend-----


function megaFriend(large) {
    var result = '';
    for (var i = 0; i < large.length; i++) {
        var currentItem = large[i];
        if (currentItem.length > result.length) {
            result = large[i];
        }
    }
    return result;
}


// var friends = ['Abdul', 'Saidul', 'Iqbal'];
// console.log(megaFriend(friends))


// -----End of megaFriend-----