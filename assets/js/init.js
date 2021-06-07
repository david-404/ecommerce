window.onload = () =>{

    const base_url =  'https://fakestoreapi.com';
    let sel = document.querySelector('.place');
    let innerValue = document.getElementById('get').innerHTML;
                  
                

            let result = axios.get(base_url + '/products', {
        
                    })

                    var response = result.then(res =>{
                       console.log(res.data);
                    })

                   let getValue = response.data[index[0]];

                   
                 let displayValue = (innerValue) => {
                   if(getValue !== "") {
                       getValue.forEach(async (item, index) => {
                           await Pull(response.data)
                           
                       });
                       
                   }
                   
                  }

                   displayValue(innerValue);


}


