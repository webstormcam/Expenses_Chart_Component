let daysOfWeek = document.querySelectorAll('.stat')
let moneyContainer = document.querySelector('.money')
let moneyValue = document.querySelectorAll('.money-text')
let current=0;

fetch("data.json")
.then(res => res.json())
.then(data => {
    
    for(let i=0;i<data.length;i++){
        current=data[i].amount;
        daysOfWeek[i].style.height=`${data[i].amount*2.87}px`
        daysOfWeek[i].style.backgroundColor='#76B5BC'
       
        for(let q=0;q<data.length;q++){
            if(current<data[q].amount){
                daysOfWeek[i].style.backgroundColor='#EC755D'
                
            }
        }

        moneyValue[i].innerHTML=`$${data[i].amount}`
        
        
        
        
        
        }

        
          
    
});

