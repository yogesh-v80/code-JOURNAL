//variables

const addTask = document.querySelector('.add-task')
const taskContainer = document.querySelector('.task-container')
const inputTask = document.querySelector('#input-task')


//event listener for add button

addTask.addEventListener('click', function(){
	

	let task = document.createElement('div')	
	task.classList.add('task')
	//to add class = "task" in div

	let li = document.createElement('li')
	li.innerText = `${inputTask.value}`
	task.appendChild(li)

	let checkBtn = document.createElement('button')
	checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
	checkBtn.classList.add('checkBtn')
	task.appendChild(checkBtn)

	let deleteBtn = document.createElement('button')
	deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
	deleteBtn.classList.add('deleteBtn')
	task.appendChild(deleteBtn)

	if(inputTask.value === ""){
		alert("First Enter Your Task")
	} else{
		taskContainer.appendChild(task)
	}

	inputTask.value = ""


checkBtn.addEventListener('click', function(){

	// li.innerText.style.textDecoration = "line-through"
	// just above code is wrong

	checkBtn.parentElement.style.textDecoration = "line-through"
})

deleteBtn.addEventListener('click', function(e){

	let target = e.target

	target.parentElement.parentElement.remove()
})


})

