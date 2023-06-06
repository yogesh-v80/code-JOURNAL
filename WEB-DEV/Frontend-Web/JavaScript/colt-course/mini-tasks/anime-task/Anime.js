

const container = document.querySelector("#container")


for(let i = 1; i < 40; i++){
	const img = document.createElement("img")
	const numc = document.createElement("div")
	const span = document.createElement("h3")
	span.classList.add("tcol")
	span.innerText = `#${i}`
	img.src = `https://cdn.catboys.com/images/image_${i}.jpg`

	numc.appendChild(img);
	numc.appendChild(span);

	container.appendChild(numc)


}



fetch("https://api.catboys.com/img")
.then(resp => resp.json())
.then(data => console.log(data));



fetch("https://api.catboys.com")
.then(resp => resp.json())
.then(data => console.log(data))

 