window.onload = () =>{

    const base_url =  'https://fakestoreapi.com';
    let sel = document.querySelector('.place');
    let innerValue = document.getElementById('get').innerHTML;
                  
                

            let result = axios.get(base_url + '/products', {
        
                    })

                    var response = result.then(res =>{
                       console.log(res.data);
                    })

                   

                   
                 let displayValue = (innerValue) => {
                   if(innerValue == "") {
                       result = innerValue+response.result;
                       response = result+innerValue.value
                   }
                   
                  }

                   displayValue(innerValue);


}


