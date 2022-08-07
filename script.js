let daysOfWeek = document.querySelectorAll('.stat')
let moneyContainer = document.querySelector('.money')
let moneyValue = document.querySelectorAll('.money-text')
let current=0;
let week = document.querySelectorAll('.week')
console.log(week[0])

fetch("data.json")
.then(res => res.json())
.then(data => {
    
    for(let i=0;i<data.length;i++){
        current=data[i].amount;
        daysOfWeek[i].style.height=`${data[i].amount*2.87}px`
        daysOfWeek[i].style.backgroundColor='rgba(118, 181, 188, 1)'
       
        for(let q=0;q<data.length;q++){
            if(current<data[q].amount){
                daysOfWeek[i].style.backgroundColor='rgba(236, 117, 93, 1)'
                
            }
        }

        moneyValue[i].innerHTML=`$${data[i].amount}`
        
        
        
        
        
        }

        
          
    
});

 daysOfWeek.forEach(item =>{
    item.addEventListener('mouseover', event =>{
   item.previousElementSibling.style.display='block'
   
    })
    item.addEventListener('mouseout',event=>{
        item.previousElementSibling.style.display='none'
      
    })
})

