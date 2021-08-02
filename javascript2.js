
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true)
request.send()
request.onload=function()
{
 var data= JSON.parse(this.response)
 console.log(data)

// 1. All countries from asia
 let asia = data.filter((ele)=> ele.region==='Asia')
  console.log(asia);

  //2. countries with population less than 2lacs
  let populat = data.filter((ele) => ele.population<200000);
  console.log(populat)

 //3. sum of the total population
  let totalpopulat= data.reduce((acc,ele)=> acc+ele.population,0)
  console.log(totalpopulat)
  
//4. countries with US dollars
  let currency = data.filter((x)=>{
      for(var i in x.currencies){
          if(x.currencies[i].code==='USD')
          {
             return true;
          }
      }
  });
  console.log(currency)
}