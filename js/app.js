function Validation() {
    let valid = true;
    let error = "";
    const validate = document.getElementById("location").value ;
    if (validate === "") {
        valid = false;
        error = "Enter in a location";
    }
    document.getElementById("display").innerHTML = error;
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
               console.log(xhr.responseText);
               // document.getElementById("display").innerHTML = fetchedData;
                //console.log(fetchedData);
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
