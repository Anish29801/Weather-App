const key = `d4153b342010ef4174468b6454bc0e26`;
const loc = `Mumbai`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&appid=${key}`

fetch("https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=imperial&appid=d4153b342010ef4174468b6454bc0e26")
.then((response)=>{
    console.log(response.json())
})
.then((data)=>{
    console.log(data.base);
})
.catch()


// https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=imperial&appid=d4153b342010ef4174468b6454bc0e26