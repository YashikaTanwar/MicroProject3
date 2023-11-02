let food=require('./food.json');

/*Ques 1 - list all the food items */
console.log(food);

/*Ques 2    list all the food items with category vegetables */
let vegetables=food.filter((Element,index)=>{
    return Element.category=="Vegetable";
});
console.log("VEGETABLES : ",vegetables);

/*Ques 3 - list all the food items with category fruit */
let fruit=food.filter((Element)=>{
    return Element.category=="Fruit";
})
console.log("FRUITS : ",fruit);

/*Ques 4 - list all the food items with category protien*/
let protein=food.filter((Element)=>{
    return Element.category=="Protein";
})
console.log("PROTEIN : ",protein);

/*Ques 5 - list all the food items with category nuts */
let nuts=food.filter((Element)=>{
    return Element.category=="Nuts";
})
console.log("NUTS : ",nuts);

/*Ques 6 - list all the food items with category grains */
let grain=food.filter((Element)=>{
    return Element.category=="Grain"
})
console.log("GRAIN : ",grain);

/*Ques 7 - list all the food items with category dairy */
let dairy=food.filter((Element)=>{
    return Element.category=="Dairy"
})
console.log("DAIRY : ",dairy);

/*Ques 8 - list all the food items with calorie above 100 */
let calorie=food.filter((Element)=>{
    return Element.calorie>100;
})
console.log("CALORIES above 100 ",calorie);

/*Ques 9 - list all the food items with calorie below 100 */
let caloriesbelow=food.filter((Element)=>{
    return Element.calorie < 100;
})
console.log("CALORIES below 100 ", caloriesbelow);

/*Ques 10 - list all the food items with highest protien content to lowest */
let sorting=food.sort((a,b)=>{
    return (b.protiens-a.protiens)
})
console.log("PROTIEN ",sorting);

/*Ques 11 - list all the food items with lowest carb content to highest */
let sortingcarb=food.sort((a,b)=>{
    return (a.cab-b.cab);
})
console.log("CARB ",sortingcarb);