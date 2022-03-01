
const  searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
   
    searchField.value ="";

    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url) 
    .then(res => res.json())
    .then(data =>  displayResult(data.data)); 

}



    
const displayResult = phones => {
    const searchResult = document.getElementById('displayResul');
  

    phones.slice(0,20).forEach( phone => {
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div>
        <img src="${phone.image}" class="card-img-top" alt="phn_img" width="600px"  height="500px">
        <div class="card-body">
          <h5 class="card-title">${phone.brand}</h5>
          <p class="card-text">${phone.phone_name} </p>
                    
        <button id="button-search"onclick="displayDetails ('${phone .slug}')" class="btn btn-outline-secondary" type="button" id="button-addon2">more details</button > 

         
        </div>
      </div>
        `
        searchResult.appendChild(div);

     //  console.log(pnone);
   
    });
} 
