//DOM manupulation


//styling 

// const mainHeading = document.querySelector("#main-heading")

// mainHeading.style.color = "red"


// const listItems = document.querySelectorAll(".list-items")

// listItems.style.fontSize = "2rem"
// it won't work here because there we can't apply style properties on every elements

// for that loop comes in action
// there we looping through all the items in <li>
//and applying inline style one by one by iteration 

// for(i = 0; i < listItems.length; i++)
// {
// listItems[i].style.fontSize = "2rem"
// }


//#Creating elements

// const ul = document.querySelector('ul')

// const list = document.createElement('li')

//append method

// ul.append(list)


// list.innerText = "X-men"

//#modifying attribute & class

// list.setAttribute('id','main-heading')
//there main-heading id style will apply on list or appended list

// list.removeAttribute('id')


// const title = document.querySelector('#main-heading')

// console.log(title.getAttribute('id'))


//!classList add remove attribute
// list.classList.add('list-items')
//to add .list-items style propeties

// list.classList.remove('list-items')

// console.log(list.classList.contains('list-items'))
//it return true if .list-items properties exist esle return false

//!remove Elements

// list.remove();


// console.log(listItems)


//#modifying text
// const firstListItem = document.querySelector('.list-items')

// console.log(firstListItem.innerText)
//simply display the text
// console.log(firstListItem.textContent)
//display the text exactly same as in document
// console.log(firstListItem.innerHTML)
//it also include the tag with text

/////////////////////////////////

// #Traversing the DOM

//!Parent node traversal

// let ulist = document.querySelector('ul')

//one level up
// console.log(ulist.parentNode)
// console.log(ulist.parentElement)

//tow level up or grand-parent
// console.log(ulist.parentNode.parentNode)
// console.log(ulist.parentElement.parentElement)


// const html = document.documentElement

// console.log(html.parentNode)
// console.log(html.parentElement)


//!child node traversal

// let ulist = document.querySelector('ul')

// console.log(ulist.childNodes)
// console.log(ulist.firstChild)
// console.log(ulist.lastChild)

// ulist.childNodes.style.backgroundColor = 'blue'
// ulist.childNodes[1].style.backgroundColor = 'blue'
// we must give node index for styling

// console.log(ulist.children)
//only returns html tag nodes or element

// console.log(ulist.firstElementChild)
// console.log(ulist.lastElementChild)

// const divs = document.querySelector('ul')

// console.log(divs.childNodes)
// console.log(divs.previousSibling)
// console.log(divs.nextSibling)

// const ulist = document.querySelector('ul')
// console.log(ulist.previousElementSibling)
// console.log(ulist.nextElementSibling)

//note: comments, indentation accounts in text node or node