function showCountries(){
    const countriesList = document.getElementById('countriesList');
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/all', true);
    xhr.send();
    xhr.onload = function() {
        if(xhr.status === 200){
            console.log('Success!');
            let countries = JSON.parse(this.response);
            countries.forEach(country => {
                let li = document.createElement('li');
                li.innerText = (country['name']['common'])+' - '+(country['flag']);
                countriesList.appendChild(li);
                console.log(country['name']['common']+' - '+country['flag']);
            });
            //li.innerText = (countries.name.common);
            //countriesList.append(li);
        }
    }
}
