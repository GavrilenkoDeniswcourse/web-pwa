document.addEventListener("DOMContentLoaded", function(){
    const height_elem = document.getElementById('height')
    const weight_elem = document.getElementById('weight')
    const result_elem = document.getElementById('result')
    const btm_elem = document.getElementById('btm')

    btm_elem.addEventListener('click' , function(){
        let h =(+height_elem.value) / 100
        let w = +weight_elem.value 
        let imt = w/(h*h)

        result_elem.value = imt.toFixed(2)
    })

})

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(registration => {
        console.log('SW registred', registration)
    })
    .catch(error => {
        console.log('SW failed', error)
    })
}