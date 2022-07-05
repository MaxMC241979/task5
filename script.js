const btn = document.querySelector(".btn");
const txtBay = document.querySelector(".txtBay");
const costBay = document.querySelector(".costBay");
const ListBay = document.querySelector(".List");


btn.addEventListener ( 'click',  function(e) {
       
    var bay = {NameBay: txtBay.value, cost: costBay.value};

    txtBay.value = "";
    costBay.value = "";
       
   console.log(bay)
  
let li = document.createElement('li')

if (bay.cost > 100) {
    li.style.color = 'red';
}else {
    li.style.color = 'green';
    }

        li.innerHTML = bay.NameBay+", цена: "+bay.cost;
        ListBay.appendChild(li); 


       
    }    
     
   

);


 
