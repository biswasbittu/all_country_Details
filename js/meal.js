const loadMealsData=()=>{
    fetch('https://themealdb.com/api/json/v1/1/search.php?s=fish')
    .then(res=>res.json())
    .then(data=>console.log(data));


}
loadMealsData();
