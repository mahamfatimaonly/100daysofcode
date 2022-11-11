const t = document.getElementById('dark');
const header = document.querySelector('header');
t.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle("bi-brightness-high-fill")){
        header.style.backgroundColor='rgb(113,118,120)';
        bg.style.transform ='2s';
    }else{
        header.style.backgroundColor='black';
        header.style.transform ='2s';
    }

})

setInterval(()=>{
    let hours=document.getElementById('hours');
    let minutes=document.getElementById('minutes');
    let seconds=document.getElementById('seconds');
    let ampm=document.getElementById('ampm');
    
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    if(h>12){
        h=h-12;
    }
    h= (h<10) ? "0" + h : h;
    m= (m<10) ? "0" + m : m;
    s= (s<10) ? "0" + s : s;
    hours.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML=am;
})
