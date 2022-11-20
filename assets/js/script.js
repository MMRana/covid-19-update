// https://api.covid19api.com/summary

fetch(' https://api.covid19api.com/summary')
.then(Response => Response.json())
.then(data => displayGlobalData(data.Global))

const displayGlobalData = global => {
   const globalContainer = document.getElementById('global-covid-repo') 
      
   globalContainer.innerHTML = `
   <h4 class="text-center my-2"> Global Statistics </h4> 
   <p class="text-center text-wrap">
   NewConfirmed: ${global.NewConfirmed}
   <br/>
   NewDeaths: ${global.NewDeaths}
   <br/>
   NewRecovered: ${global.NewRecovered}
   <br/>
   TotalConfirmed: ${global.TotalConfirmed}
   <br/>
   TotalDeaths: ${global.TotalDeaths}
   <br/>
   TotalRecovered: ${global.TotalRecovered}

</p>
    
    `
    document.getElementById('date').innerHTML = `
    <p><i class="far fa-calendar-alt"></i> ${global.Date.slice(0,10)}</p>
    `
}

 const searchCountry = () =>{
    fetch(' https://api.covid19api.com/summary')
    .then(Response => Response.json())
    .then(data => displayGlobalCountries(data.Countries))
 }

  const displayGlobalCountries = countries => {
        console.log(countries)

    for(let i = 0; i < countries.length; i++) {
        const countryName = countries[i].Country;
        const countryName2 = countries[i].Slug;

        const inputText = document.getElementById('search-bar').value;


        if(countryName === inputText || countryName2 === inputText){
            const countryContainer = document.getElementById('country-covid')
            countryContainer.innerHTML = `
            <h4  class="text-center my-2">${countries[i].Country}'s Statistics </h4>

            <p class="text-wrap">
                NewConfirmed: ${countries[i].NewConfirmed}
                <br/>
                NewDeaths: ${countries[i].NewDeaths}
                <br/>
                NewRecovered: ${countries[i].NewRecovered}
                <br/>
                TotalConfirmed: ${countries[i].TotalConfirmed}
                <br/>
                TotalDeaths: ${countries[i].TotalDeaths}
                <br/>
                TotalRecovered: ${countries[i].TotalRecovered}
            </p>

            `
            document.getElementById('country-covid').style.display = 'block'
            document.getElementById('search-bar').value = "";
        }
    }
  }

    document.getElementById('search-bar').addEventListener('keypress', function(event){
        if(event.key = 'Enter'){
            document.getElementById('search-btn').click();
        }
    })


//  Time Update

    function UpdateTime(){
        const clock = new Date();
        document.getElementById('time').innerHTML = clock.toLocaleTimeString();
        // document.getElementById('time').innerHTML = clock.toLocaleDateString();

    }
    setInterval(UpdateTime, 1000);



