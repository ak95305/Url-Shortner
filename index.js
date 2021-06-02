let hamBurger = document.querySelector(".hamburger");
let navMobile = document.querySelector(".nav-mobile");

hamBurger.addEventListener("click", ()=>{hamBurgerFunc()});

function hamBurgerFunc(){
	if(hamBurger.classList.contains("active-ham")){
		hamBurger.classList.remove("active-ham");
		navMobile.classList.remove("nav-mobile-active");
	} else{
	hamBurger.classList.add("active-ham");
	navMobile.classList.add("nav-mobile-active");
}
}