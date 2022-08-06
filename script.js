let daysOfWeek = document.querySelectorAll('.stat')


fetch("data.json")
.then(res => res.json())
.then(data => {
    
    for(let i=0;i<data.length;i++){
        daysOfWeek[i].value=data[i].amount;
        daysOfWeek[i].style.height=`${data[i].amount*2.87}px`
        }

        console.log(data[0].amount)
          
    
});

