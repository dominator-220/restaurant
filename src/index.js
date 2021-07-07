
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
        content.removeChild(content.children[content.children.length-1]);
    
   
        content.appendChild(createHome());
        content.appendChild(createFooter())
    });

    let menu=document.createElement('div');
    menu.setAttribute("id","menu");
    menu.textContent="Menu";
    menu.addEventListener('click',(e)=>{
        content.removeChild(content.children[content.children.length-1]);
        content.removeChild(content.children[content.children.length-1]);
    
   
        content.appendChild(createMenu());
        content.appendChild(createFooter())
       
    });

    let contact=document.createElement('div');
    contact.setAttribute("id","contact");
    contact.textContent="Contact";
    contact.addEventListener('click',(e)=>{
        content.removeChild(content.children[content.children.length-1]);
        content.removeChild(content.children[content.children.length-1]);
    
   
        content.appendChild(createContact());
        content.appendChild(createFooter())
        
    });
    container.appendChild(home);
    container.appendChild(menu);
    container.appendChild(contact);
    nav.append(restaurantName);
    nav.append(container);
    return nav;



}


function createFooter(){
    console.log(3);
    let footer=document.createElement('footer');
    let copyRight=document.createElement('div');
    copyRight.classList.add("copyright");
    let information=document.createElement('span');
    information.textContent=" Copyright © 2021 dominator-220";
    let githublink=document.createElement('a');
    githublink.href="https://github.com/dominator-220";
    githublink.target="_blank";
    githublink.classList.add("link");
    let logo=document.createElement('img');
    logo.src="github.png";
    logo.classList.add('githubicon');
    githublink.append(logo);
    copyRight.append(information);
    copyRight.append(githublink);
    footer.append(copyRight);


    return footer;
    
}

const content=document.querySelector("#content");

content.appendChild(createHeader());

content.appendChild(createHome());
content.appendChild(createFooter());




//content.appendChild(createMenu());

