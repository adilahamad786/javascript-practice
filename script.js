const list = document.getElementById("list");
console.log(list);

// navigate between elements
    console.log(document.getRootNode)
    console.log(document.body)
    console.log(document.head)
    console.log(list.parentElement)
    console.log(list.previousElementSibling)
    console.log(list.nextElementSibling)
// NOTE: children propertie give HTMLCollection, array like
    console.log(list.children)
// -> for of loop is working...
    for(child of list.children) {
        console.log(child.hasAttribute("class"))
    }
    console.log(list.firstElementChild)
    console.log(list.lastElementChild)

// Adding style
list.style.border = "3px solid orange"