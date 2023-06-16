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


// Working with NodeList
    const lis = document.querySelectorAll(".list-item")
    console.log(lis)

// NodeList also iterable
    for (li of lis) {
        console.log(li)
    }