
// let grid = Number(prompt("enter grid number"))
// for( let i = 1; i <= grid; i++){
// 	for(let j = 1; j <= grid/2; j++){
// 		console.log(" " + "#" + "\b")
// 	}
// }


// for(let line = "#"; line.length < 8; line = line + "#")
// console.log(line)


let grid = Number(prompt("enter the grid size number"))
let line = "#", space = " "

for( let i = 1; i <= grid; i++){
let gridLine = ""
	if(i%2==0){
		for(let i = 1; i <= grid/2; i++)
			gridLine = gridLine + (line + space)
	} else{
		for(let j = 1; j <=grid/2; j++)
			gridLine = gridLine + (space + line)
	}

	console.log(gridLine)
}