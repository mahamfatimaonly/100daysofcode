const t = document.getElementById('dark');
const header = document.querySelector('header');
t.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle("bi-moon")){
        header.style.backgroundColor='#1B1C19';
        header.style.transform ='4s';
    }else{
        header.style.backgroundColor='#D6D6D6';
        header.style.transform ='4s';
    }

})