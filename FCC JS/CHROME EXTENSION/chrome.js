let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.querySelector("#tab-btn")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    // grab the URL from the current tab from the chrome API

    chrome.tabs.query({active: true , currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify (myLeads) )
        render(myLeads)
    })
 
})

// Ending Javascript code here

