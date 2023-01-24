let list=document.querySelectorAll("li");
function link(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click',link));
/*
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
      list[i].classList.remove('active');
      list[i].classList.add('active');
    });
}

list.forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('active'));
    item.classList.remove('active');
});

*/