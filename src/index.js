
import createHome from "./home"
import createMenu from "./menu"
import createContact from "./contact"

function createHeader(){
    let header=document.createElement('header');
    header.classList.add('header');
    header.appendChild(createNav());
    return header;
    
}

function createNav(){
    let nav=document.createElement('nav');
    let restaurantName=document.createElement('div');
    restaurantName.classList.add('RestaurantName');
    restaurantName.textContent='Montipasto';
    let container=document.createElement('div');
    container.classList.add('parent');
    let home=document.createElement('div');
    home.setAttribute("id","home");
    home.textContent="Home";
    home.addEventListener('click',(e)=>{
     
        content.removeChild(content.children[content.children.length-1]);
    
   
        content.appendChild(createHome());
    });

    let menu=document.createElement('div');
    menu.setAttribute("id","menu");
    menu.textContent="Menu";
    menu.addEventListener('click',(e)=>{
        content.removeChild(content.children[content.children.length-1]);
    
   
        content.appendChild(createMenu());
    });

    let contact=document.createElement('div');
    contact.setAttribute("id","contact");
    contact.textContent="Contact";
    contact.addEventListener('click',(e)=>{
        content.removeChild(content.children[content.children.length-1]);
    
   
        content.appendChild(createContact());
    });
    container.appendChild(home);
    container.appendChild(menu);
    container.appendChild(contact);
    nav.append(restaurantName);
    nav.append(container);
    return nav;



}


const content=document.querySelector("#content");

content.appendChild(createHeader());
content.appendChild(createHome());


//content.appendChild(createMenu());