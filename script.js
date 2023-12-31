// const list = document.getElementById("list");
// console.log(list);

// // navigate between elements
//     console.log(document.getRootNode)
//     console.log(document.body)
//     console.log(document.head)
//     console.log(list.parentElement)
//     console.log(list.previousElementSibling)
//     console.log(list.nextElementSibling)
// // NOTE: children propertie give HTMLCollection, array like
    // console.log(list.children)
// // -> for of loop is working...
    // for(child of list.children) {
    //     console.log(child)
    //     // console.log(child.hasAttribute("class"))
    // }
//     console.log(list.firstElementChild)
//     console.log(list.lastElementChild)

// // Adding style
//     list.style.border = "3px solid orange"

// // add/remove/toggle/exist/see-all-classes class
//     list.classList.add("temp")
//     list.classList.remove("temp")
//     list.classList.toggle("temp")
//     list.classList.contains("temp")
//     console.log(list.classList)

// // set/remove/check attributes
//     list.setAttribute("class", "temp")
//     list.removeAttribute("class")
//     console.log(list.hasAttribute("class"))


// // Working with NodeList
//     const lis = document.querySelectorAll(".list-item")
//     console.log(lis)

// // NodeList also iterable
//     for (li of lis) {
//         console.log(li)
//     }



// const list = document.querySelector("#list")
// console.log(list)

// // Create element
//     const span = document.createElement("span")
// // Create text node
//     const text = document.createTextNode("This is dynamic message!")
//     // Or span.textContent = "This is dynamic message!"
// // Append text to span element
//     span.append(text) // Or span.appendChild(text)
//     console.log(span)


// // Create div element
//     const div = document.createElement("div")
// // Change or set InnerHtml of div tag
//     div.innerHTML = "<span>Title</span>"
// // See full div element
//     console.log(div)
// // See innerText
//     console.log(div.children[0].innerText)
// // Change innerText
//     div.firstChild.innerText = "Changed title!"
//     console.log(div)


// Both are working same
// const list1 = document.querySelector("#list");
// console.log(list1.parentElement)
// console.log(list1.children[0])

// const list2 = document.getElementById("list");
// console.log(list2.parentElement)
// console.log(list2.children[0])


// // Both are working same
// const Items1 = document.getElementsByClassName("list-item");
// console.log(Items1[0].nextElementSibling)
// // Working with style and children elements
//     for (let item of Items1) {
//         item.firstElementChild.style.color = "green"
//     }

// const Items2 = document.querySelectorAll(".list-item");
// console.log(Items2[0].nextElementSibling)
// // Working with style and children elements
//     for (let item of Items2) {
//         item.firstElementChild.style.color = "green"
//     }




// // Select list
// const list = document.querySelector("#list")
// // Creating li element
//     const li = document.createElement("li")
// // Adding class in li element
//     li.classList.add("list-item")
// // Create dynamic html
//     let text = "Title"
//     const html = `<a href="">${text}</a>`
// // Insert html
//     li.innerHTML = html
// // append li in list
//     list.append(li);
// // Clone and append again
//     list.append(li.cloneNode(true));


// // Basic element creation steps
// const list = document.getElementById("list")
// const li = document.createElement("li")
// li.classList.add("list-item")
// const html = `<a href="">New Added!</a>`
// li.innerHTML = html

// // methods to add HTML element as various place
// // Insert as last child element
//     list.append(li)
//     list.appendChild(li)
// // Insert as first child element
//     list.prepend(li)
// // Insert element before the selected element
//     list.before(li)
// // Insert element after the selected element
//     list.after(li)
// // Remove element
//     list.firstElementChild.remove()




// // Basic element creation steps
// const list = document.getElementById("list")
// const li = document.createElement("li")
// li.classList.add("list-item")
// const html = `<a href="">New Added!</a>`
// li.innerHTML = html

// // Insert html element at various place using insertAdjacentElement
// list.insertAdjacentElement("beforebegin", li)
// list.insertAdjacentElement("afterbegin", li)
// list.insertAdjacentElement("beforeend", li)
// list.insertAdjacentElement("afterend", li)





// // Basic element creation steps
//     const list = document.getElementById("list")
//     const li = document.createElement("li")
//     li.classList.add("list-item")
//     const html = `<a href="">New Added!</a>`
//     li.innerHTML = html

// // Insert element as last child
//     list.appendChild(li)
// // Replace element by reference(child) element
//     list.replaceChild(li, list.firstElementChild)
// // Insert element, before the given reference(child) element
//     list.insertBefore(li, list.lastElementChild)
// // Remove given reference(child) element
//     list.removeChild(list.lastElementChild)



// // Basic string element creation steps
//     const list = document.getElementById("list")
//     const html = `<li class="list-item"><a href="">New Added!</a></li>`

// // Insert html string element at various place using insertAdjacentElement
//     list.insertAdjacentHTML("beforebegin", html)
//     list.insertAdjacentHTML("afterbegin", html)
//     list.insertAdjacentHTML("beforeend", html)
//     list.insertAdjacentHTML("afterend", html)



// // NodeList represent static list of element and working forEach method also
//     const list = document.querySelector("#list");
//     console.log(list)
//     const items = document.querySelectorAll(".list-item");
//     console.log(items) // output: NodeList(5)

//     items.forEach(val=>console.log(val)) // working forEach method
//     for (let item of items)
//         console.log(item)

//     const li = document.createElement("li")
//     li.classList.add("list-item")
//     li.innerHTML = `<a href="#">New Added!</a>`

//     list.appendChild(li);
//     console.log(items) // output: NodeList(5)



// // HTMLCollection represent dynamic list of element and for of loop working, but forEach method not working directly
//     const list = document.getElementById("list");
//     console.log(list)
//     const items = document.getElementsByClassName("list-item");
//     console.log(items) // output: HTMLCollection(5)

//     for (let item of items) // for of loop working
//         console.log(item)

//     Array.from(items).forEach(val => { // direct forEach not working
//         console.log(val)
//     });

//     const li = document.createElement("li")
//     li.classList.add("list-item")
//     li.innerHTML = `<a href="#">New Added!</a>`

//     list.appendChild(li);
//     console.log(items) // output: HTMLCollection(6)




// // Getting browser width and heigth
//     const browserWidth = window.outerWidth
//     console.log(browserWidth)
//     const browserHeight = window.outerHeight
//     console.log(browserHeight)



// // Getting window width and heigth
//     const windowWidth = window.innerWidth
//     console.log(windowWidth)
//     const windowHeight = window.innerHeight
//     console.log(windowHeight)



// // Getting Element Dimentions
//     const box = document.querySelector(".container")
//     console.log(box)
//     box.style.border = "2px solid red"
//     box.style.margin = "2rem"
//     box.style.padding = "2rem"
//     const dimentions = box.getBoundingClientRect()
//     console.log(dimentions)

// // Getting element width and height including both side border, padding and width and height
//     console.log(box.offsetWidth)
//     console.log(box.offsetHeight)



// // Calculate viewport height and width
//     const viewportDimentions = window.visualViewport;
//     console.log(viewportDimentions)





// // WORKING with Events
//     const input = document.querySelector("#username")
//     console.log(input)

//     const task1 = (e) => {
//         e.preventDefault();
//         console.log(e.target.value)
//         console.log("task 1")
//     }

//     const task2 = (e) => {
//         e.preventDefault();
//         console.log(e.target.value)
//         console.log("task 2")
//     }

// // Working...
//     input.addEventListener("change", task1)

// // Working...
//     input.addEventListener("change", task2)

// // Remove addEventListener
//     input.removeEventListener("change", task1)


const grandparent = document.querySelector(".grandparent")

const fun1 = (e) => {
    e.preventDefault();
    console.log("This when using arrow function")
    console.log(this)
    console.log(e.target);
    console.log(e.currentTarget)
}

function fun2(e) {
    e.preventDefault();
    console.log("This when using traditional function")
    console.log(this)
    console.log(e.target);
    console.log(e.currentTarget)
}

grandparent.addEventListener("click", fun1)
grandparent.addEventListener("click", fun2)