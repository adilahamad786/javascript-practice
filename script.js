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


// Both are working same
// const Items1 = document.getElementsByClassName("list-item");
// console.log(Items1[0].nextElementSibling)

// const Items2 = document.querySelectorAll(".list-item");
// console.log(Items2[0].nextElementSibling)