// GET THE REFERENCES
const button = document.querySelectorAll('.navBar');
let dd = document.querySelector('.dynamic-content');
let url = './partials/home.html';

 /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */
// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
function loadContent(url){

fetch(url)
    .then(function (rsp) {
        if (rsp.ok) {
            return rsp.text();
        }

        // handle error
        throw new Error(rsp.statusText);
    })
    .then(function (data) {
        dd.innerHTML = data;
    })
    .catch(function (err) {
        console.log(err.message);
    });
}
loadContent(url);
  
// CLOSE YOUR FUNCTION loadContent HERE
// CALL loadContent WITH THE CURRENT VALUE OF url 
       
// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
//const selectContent ...
function selectContent(ev){
    // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    ev.preventDefault();
     // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    let url = ev.target.getAttribute('href');
    //let url = links.getAttribute('href');
    loadContent(url);
}
   
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
// CLOSE YOUR FUNCTION selectContent HERE
// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let i = 0; i < button.length; i++){
    button[i].onclick = selectContent;
    //button[i].addEventListener('click', selectContent(url));
}



// add attribute
let nodeList = document.querySelectorAll('#controls button');
function handleClick(e) {
    // move the id-attribute to the currently clicked item
    e.preventDefault();
    let currentItem = e.target;

    // loop through the list of all nav-items
    for (let i = 0; i < nodeList.length; i++){
        // if nav-item contains attribute type of id
        if (nodeList[i].hasAttribute('id')) {
         
            // remove the attribute type of 'id'
                    nodeList[i].removeAttribute('id');
                }
            
    }

    
    // add attribute to the currently clicked element
     currentItem.setAttribute('id','active');
     console.log(currentItem);
    if(url="./partials/index.html"){
        nodeList[0].hasAttribute("id");
    }
    else {
        nodeList[1].hasAttribute("id");
    }
  };
  for (let i = 0; i < nodeList.length; i++){
    nodeList[i].addEventListener('click', handleClick); 
   
}
  