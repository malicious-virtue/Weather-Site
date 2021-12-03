function Validation() {
    let valid = true;
    let error = "";
    const validate = document.getElementById("location").value ;
    if (validate === "") {
        valid = false;
        error = "Enter in a location";
    }
    document.getElementById("error").innerHTML = error;
    return validate;
}

function AjaxCall() {
   if (Validation()) {
      let city = document.getElementById("location").value;
        
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=113267335c8c45ddcf28c2d7e3c32191"
        let xhr = new XMLHttpRequest();
         

           xhr.open("GET", url, true);
        
           
          xhr.onreadystatechange= function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                let fetchedData = JSON.parse(xhr.responseText);
                let temp = fetchedData.main.temp;
                let name = fetchedData.name;
                let min = fetchedData.main.temp_min;
                let max = fetchedData.main.temp_max;
               
               let currentTemp = Math.round((temp - 273.15) * 9/5 + 32);
                let tempMin = Math.round((min - 273.15) * 9/5 + 32);
               let tempMax = Math.round((max - 273.15) * 9/5 + 32);
               
               document.getElementById("city-name").innerHTML = name;
               document.getElementById("current-temp").innerHTML = currentTemp;
               document.getElementById("min").innerHTML = tempMin;
               document.getElementById("max").innerHTML = tempMax;
            }
           
        };     
        xhr.send();
    }
}

// let xhr = new XMLHttpRequest();
// let city = "New York, New York"
// let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=113267335c8c45ddcf28c2d7e3c32191"
// xhr.open("POST",url, true);
// xhr.setRequestHeader("Content-type", "application/json");
// xhr.send();
// console.log(xhr);
