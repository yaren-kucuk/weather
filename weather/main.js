const url='b280fc12e0b279095788251d4271204e'
const form=document.getElementById('form')
const city=document.getElementById('city')
const weatherDiv=document.getElementById('weather')
const iconDiv=document.getElementById('icon')
const temperatureDiv=document.getElementById('temperature')
const descriptionDiv=document.getElementById('description')
const detailsDiv=document.getElementById('details')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
     // bunu bir değişkende tutalım
    const cityValue=city.value
    //bir metoda yönlendirelim
    getweather(cityValue)
 
})
async function getweather(cityValue){
    try{
        const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${url}&units=metric`)
        const data =await response.json() // dataya erişmek için json formatına çevirdik
        console.log(data)
    
        const temparature=Math.round(data.main.temp)
        const icon=data.weather[0].icon
        const details=[
            `felt: ${ Math.round(data.main.feels_like)} `,
            `humidity:${data.main.humidity}% `,
            `speed :${data.wind.speed} m/s `,
    
        ]
    
    iconDiv.innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather İcon">`
    
    temperatureDiv.textContent=`${temparature}°C`
    
    let detailsNew= details.map((detail)=>`<div>${detail}</div>`)
    detailsDiv.innerHTML=detailsNew
    
    }
    
    catch(error){
        iconDiv.innerHTML=' '
        temperatureDiv.textContent=' '
        descriptionDiv.textContent='lütfen geçerli bir giriş yapınız'
        detailsDiv.innerHTML=' '
    }

}


   