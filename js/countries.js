const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}


const displayCountries = contries => {
    const countriesContainer = document.getElementById('all-countries');

    // console.log(contries);
    // for(const country of contries)
    // console.log(country);

    contries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
    
    <h3>CountryName:${country.name.common}</h3>
    <p>Capital:${country.capital ? country.capital[0] : 'No capital'}</p>
    <button onclick="loadContryDetails('${country.cca2}')"> Details</button>`

        countriesContainer.appendChild(countryDiv)
    })

}

const loadContryDetails = code => {
    // https://restcountries.com/v3.1/alpha/{code}

    const url=`https://restcountries.com/v3.1/alpha/${code}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>ShowCountryDetail(data[0]))
}

const ShowCountryDetail = country =>{
    const detailContainer = document.getElementById('country-details');
    detailContainer.innerHTML=`
    <h3>Name:${country.name.common}</h3>
    <p>Capital:${country.capital ? country.capital[0] : 'No capital'}</p>
    <img src="${country.flags.png}" alt="">`

}
loadCountries();
