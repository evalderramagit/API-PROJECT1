
function getData(){

    function idNumb(item){
        if (item["id"]>= 5){
            console.log(item)
        }
    }


    fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())
    .then(json => json.forEach(item =>  
    //function call goes here
      idNumb(item)
    

    ))
};
