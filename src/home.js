function createHome(){
    let poster=document.createElement('div');
    poster.setAttribute("id","poster");
    let child1=createDiv("Order Now","dealcontent1");
    let child2=createDiv(" Best pizzas grilled with cheese mozzarella and pepperoni","dealcontent2");
    let child3=createDiv("Every bite is a delight","dealcontent3");
    let chefImg=document.createElement('img');
    chefImg.src="chef.jpg";
    chefImg.classList.add('chef');
    poster.appendChild(child1);
    poster.appendChild(child2);
    poster.appendChild(chefImg);
    poster.appendChild(child3);
    console.log(1);
    return poster;


    



}

function createDiv(text,Class){
    let newDiv=document.createElement('div');
    newDiv.textContent=text;
    newDiv.classList.add(Class);
    return newDiv
}

export default createHome