const loadUser=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>displayuser(data));

}
const displayuser=user=>{
    const genderTag=document.getElementById('gender');
    genderTag.innerHTML=user.results[0].gender
    const name=document.getElementById('name');
    name.innerHTML=`${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`

    const img=document.getElementById('img');
    img.innerHTML=`<img src=" ${user.results[0].picture.large}" alt="">
    `
    // console.log(user.results[0].picture.large);
    // console.log(user.results[0].picture.medium);
    // console.log(user.results[0].picture.thumbnail);

}
loadUser();
