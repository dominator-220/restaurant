function createMenu(){
    let menu=document.createElement('div');
    menu.classList.add('menu');
  
    menu.append(createDish("Delux Veggie","veggie.jpg","Veggies are the perfect topping.Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza"));
    menu.append(createDish("Supreme Pizza","supreme.jpg","The “supreme” refers to the litany of toppings that come scattered on these pies, from sausage to vegetables to pepperoni."));
    menu.append(createDish("Farm House","farmhouse.jpeg","Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes"));
    menu.append(createDish("Peppy Paneer","peppypaneer.jpeg","Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!"));
    menu.append(createDish("Margherita","marghreita.jpg","A hugely popular margherita, with a deliciously tangy single cheese topping, try it once 😋"));
    menu.append(createDish("Mexican Green Wave","greenwave.jpeg","A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs."));
    menu.append(createDish("Veg Extravaganza","vegvanzaa.jpg","Exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around."));
    menu.append(createDish("Indi Tandoori Paneer","tandooripaneer.webp","It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo"));
    menu.append(createDish("Non Veg Supreme","nonvegsupreme.webp","Supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers"));
    menu.append(createDish("Chicken Dominator","Dominator.jpg","Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers"));
    menu.append(createDish("Chicken Fiesta","fiesta.jpeg","Grilled Chicken Rashers I Peri-Peri Chicken I Onion I Capsicum"));
    menu.append(createDish("Indi Chicken Tikka","chickentikka.jpg","The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo"));
    menu.append(createDish("Stuffed Garlic Bread","garbread.jpeg","Freshly Baked Garlic Bread stuffed with mozzarella cheese, sweet corns & tangy and spicy jalapeños"));
    menu.append(createDish("Non Veg Pasta Italiano White","pasta.png","Penne Pasta tossed with extra virgin olive oil, exotic herbs & a generous helping of new flavoured sauce."));
    menu.append(createDish("Butterscotch Mousse Cake","cake.png","A Creamy & Chocolaty indulgence with layers of rich, fluffy Butterscotch Cream and delicious Dark Chocolate Cake, topped with crunchy Dark Chocolate morsels"));
    console.log(2);
    return menu;
}
function createDish(name,src,info){
    let dish=document.createElement('div');
    let dishname=document.createElement('div');
    let dishinfo=document.createElement('div');
    let image=document.createElement('img');
    dishname.textContent=name;
    dishname.classList.add('pizzaname');
    dishinfo.textContent=info;
    dishinfo.classList.add('info');
    image.src=src;
    image.classList.add('dishimages');
    dish.appendChild(dishname);
    dish.appendChild(image);
    dish.appendChild(dishinfo);
    
    return dish;
}


export default createMenu;