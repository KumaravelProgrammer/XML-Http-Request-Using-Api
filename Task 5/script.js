const request = new XMLHttpRequest;

request.open("GET", "https://rest-countries-api-techieegy.herokuapp.com/v1/all", true)

request.send();

// let promise = new Promise((resolve, reject) => {
//     resolve("https://rest-countries-api-techieegy.herokuapp.com/v1/all");
//     //  reject("Api Not Working")
// });

// promise.then((data) => {
//     console.log(" Api Key is Valid ");
// }).catch((err => {
//     console.log("Key Is Invalid");
// }))


request.onload = () => {

    let data = JSON.parse(request.response);
    data.map((item) => {


        // Getting The Country Name 

        const countryname = document.createElement("div")
        countryname.className = "country"
        countryname.style.display = "inline"
        countryname.style.textAlign= "center"
        countryname.style.display= "block";
        countryname.style.marginLeft="auto"
        countryname.style.marginRight="auto"
        countryname.style.border= "10px 20px"
        countryname.style.backgroundColor= "red"
        countryname.style.color = "white"
        countryname.style.padding = "5px"
    
        const countryText = document.createTextNode(item.name)
        countryname.appendChild(countryText);
        document.querySelector("body").appendChild(countryname);


        const image = document.createElement('img')
        image.className = "image div"
        image.setAttribute("src", item.flags[0])
        document.querySelector("body").appendChild(image);
        image.style.height = "200px"
        image.style.width = "250px"
        image.style.padding = "10px"
        image.style.top = "10px"
        image.style.overflow= "hidden"
        image.style.display= "block";
        image.style.marginLeft="auto"
        image.style.marginRight="auto"
        image.style.borderRadius = "8px"
        image.style.boxshadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" 


        // Getting The Capital 

        const countrycapital = document.createElement("text")
        countrycapital.className = "capital"
        countrycapital.style.padding = "10px"
        countrycapital.style.fontStyle = "bold"
        countrycapital.style.textAlign= "center"
        countrycapital.style.display= "block";
        countrycapital.style.marginLeft="auto"
        countrycapital.style.marginRight="auto"
        const capitaltext = document.createTextNode(`Capital : ${item.capital}`)
        countrycapital.appendChild(capitaltext)
        document.querySelector("body").appendChild(countrycapital);

        // Getting Country Code From Api 

        const countrycode = document.createElement('text')
        countrycode.className = 'Counrtycode'
        countrycode.style.padding = "10px"
        countrycode.style.textAlign= "center"
        countrycode.style.display= "block";
        countrycode.style.marginLeft="auto"
        countrycode.style.marginRight="auto"
        const countrycodeText = document.createTextNode(`Country Codes : ${item.alpha2Code} , ${item.alpha3Code}`)
        countrycode.appendChild(countrycodeText)
        document.querySelector("body").appendChild(countrycode)

        // Getting The Region From API 

       if ( item.region) {
        const region = document.createElement('text')
        region.className = "Region"
        region.style.padding="10px"
        region.style.textAlign= "center"
        region.style.display= "block";
        region.style.marginLeft="auto"
        region.style.marginRight="auto"
        const regionText = document.createTextNode(` Region : ${item.region} `)
        region.appendChild(regionText)
        document.querySelector("body").appendChild(region)
       } else {

        const region = document.createElement('text')
        region.className = "Region"
        region.style.padding="10px"
        region.style.textAlign= "center"
        region.style.display= "block";
        region.style.marginLeft="auto"
        region.style.marginRight="auto"
        const regionText = document.createTextNode( " Region : Item Not Found")
        region.appendChild(regionText)
        document.querySelector("body").appendChild(region)
           
       }

        // Getting Latitude and Longitude from API 

        const lattitudeandlogitude = document.createElement('text')
        lattitudeandlogitude.className = "lattitudeandlogitude"
        lattitudeandlogitude.style.padding= "10px"
        lattitudeandlogitude.style.textAlign= "center"
        lattitudeandlogitude.style.display= "block";
        lattitudeandlogitude.style.marginLeft="auto"
        lattitudeandlogitude.style.marginRight="auto"
        const lattitudeandlogitudetext = document.createTextNode(` Lat,Long : ${item.latlng}`)
        lattitudeandlogitude.appendChild(lattitudeandlogitudetext)
        document.querySelector("body").appendChild(lattitudeandlogitude)

        // Getting Currency Code 

        if (item.currencies) {

      const currencycode = document.createElement('text')
        currencycode.className = "currencycode"
        currencycode.style.padding= "10px"
        currencycode.style.textAlign= "center"
        currencycode.style.display= "block";
        currencycode.style.marginLeft="auto"
        currencycode.style.marginRight="auto"
        const currencycodeText = document.createTextNode(`Code:(${item.currencies[0].code}) , Name : ${item.currencies[0].name} , Symbol : ${item.currencies[0].symbol}`)
        currencycode.appendChild(currencycodeText)
        document.querySelector("body").appendChild(currencycode)
        } else {
            const currencycode = document.createElement('text')
        currencycode.className = "currencycode"
        currencycode.style.padding= "10px"
        currencycode.style.textAlign= "center"
        currencycode.style.display= "block";
        currencycode.style.marginLeft="auto"
        currencycode.style.marginRight="auto"
        const currencycodeText = document.createTextNode(  "Code: Not Found  , Name : Not Found , Symbol : Not Found ")
        currencycode.appendChild(currencycodeText)
        document.querySelector("body").appendChild(currencycode)
        }


        console.log(item.currencies);

    })
}


// let h1 = document.createElement('h1')

// const text = document.createTextNode("what if")

// h1.appendChild(text)

// document.querySelector("body").appendChild(h1);




