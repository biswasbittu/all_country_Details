const loadMealsData=()=>{
    fetch('https://themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res=>res.json())
    .then(data=>showData(data));
    

}

const showData=items=>{
    console.log(items);
// console.log(items.meals[0].strMeal);
// console.log(items.meals[0].strCategory);
// console.log(items.meals[0].strArea);

for (const item of items){
     console.log(item)
}

}
loadMealsData();
