//JavaScript

let myLeads = []

const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const saveTabBtn = document.getElementById("saveTab-btn")
const deleteBtn = document.getElementById("delete-btn")
let ulEl = document.querySelector("#ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage)
    myLeads = leadsFromLocalStorage
renderLeads()


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()

})

saveTabBtn.addEventListener("click", function(){
  browser.tabs.query({currentWindow: true, active: true}, function(tabs){
       let tab = tabs[0] // Safe to assume there will only be one result
       myLeads.push(tab.url)
       localStorage.setItem("myLeads", JSON.stringify(myLeads))
       renderLeads()
  })
})

deleteBtn.addEventListener("dblclick", function(){
    myLeads = []
    localStorage.clear()
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for(let i=0;i<myLeads.length;i++)
        {
           listItems += `
           <li>
                <a target='_blank' href='${myLeads[i]}' + >
                    ${myLeads[i]}
                </a>
           </li>
           `
        }
    ulEl.innerHTML = listItems
}




