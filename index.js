
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

     
   
    });
} 



const loadDetails = phone =>{
    
  
      const details =  document.getElementById('details');
      
      //for remove presuse details;
      details.textContent = '';
  
     
  
      const div = document.createElement('div');
      div.className=('card')
  
      div.innerHTML=`
  
      <img src="${phone.image}" class="card-img-top" alt="..."  width="600px"  height="500px">
         
      <div class="card-body">
        <h5 class="card-title">${phone.releaseDate}</h5>
        <p class="card-text">
        Chipset: ${phone.mainFeatures.chipSet} 
         Display: ${phone.mainFeatures.displaySize}
         Memory: ${phone.mainFeatures.memory}
          </p>
  
          <p class="card-text">
           Bluthut: ${phone.others.Bluetooth}
           NFC:  ${phone.others.NFC}
          GPS:  ${phone.others.GPS}
           Radio: ${phone.others.Radio}
           USB: ${phone.others.USB}
           WLAN: ${phone.others.WLAN}
  
  
          </p>
  
        
      </div>
    
      
      `;
  
      details.appendChild(div);
  
  
  
  
  }
  
  
      
  
  
      
  
  
  