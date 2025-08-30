const form=document.querySelector('#search')
const city=document.querySelector('#city')
const temp=document.querySelector('#temp1')
const img=document.querySelector('#img')
const humidity=document.querySelector('#hum')
const  wind=document.querySelector('#win')
const Pressure=document.querySelector('#Pre')
search.addEventListener('submit', async function(e){
    e.preventDefault()
let search=form.elements.query
console.log(search)
const res=await axios.get(`http://api.weatherapi.com/v1/current.json?key=1b594bf0b16f41a49c6100152253008&q={${search.value}}`)
console.log(res.data)
displayData(res.data)
search.value=''
})
const displayData=(result)=>{
    city.innerHTML=result.location.name
    temp.innerHTML=`${result.current.temp_c}&deg;c`
    img.src=result.current.condition.icon
    humidity.innerHTML=`${result.current.humidity} %`
    wind.innerHTML=`${result.current.wind_kph} Km/h`
    Pressure.innerHTML=`${result.current.pressure_mb} hPa`


}