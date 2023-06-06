
let openBtn = document.querySelector("#open-btn")
let modalContainer = document.querySelector(".modal-container")
let closeBtn = document.querySelector(".close-btn")

openBtn.addEventListener('click', function(){

	modalContainer.style.display = 'block'

})


closeBtn.addEventListener('click', function(){
	modalContainer.style.display = 'none'
})


//this code will allow us to click on anywhere on window to 
//to close the modal text
window.addEventListener('click', function(e) {

	if(e.target === modalContainer){
		modalContainer.style.display = 'none'
	}
})