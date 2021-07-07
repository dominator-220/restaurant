function createContact(){
    console.log(2);
    let contact=document.createElement('div');
    contact.classList.add('contact');
    contact.append(createinfo("phone","phone.jpg","phoneimg","Phone: 6234409876"));
    contact.append(createinfo("Address","address.png","adressimg","Address: Raj Towers, Ground Floor, E Boring Canal Rd, Sri Krishna Puri, Patna, Bihar 800001, India"));
    
    contact.append(createinfo("maps","maps.jpg","map",""));
    contact.append(createinfo("mail","mail.png","mailimg","montipasto234@gmail.com"));
    contact.append(createinfo("insta","insta.png","instaimg","@wearemontipasto"));
   
    return contact;

    
}

function createinfo(divclass,src,imgclass,text){
    let info=document.createElement('div');
    info.classList.add(divclass);
    let infoImg=document.createElement('img');
    infoImg.src=src;
    infoImg.classList.add(imgclass);
    info.appendChild(infoImg);
    if (text!=""){
        let infoContent=document.createElement('span');
        infoContent.textContent=text;
        
        info.appendChild(infoContent);
    }
    return info;

}

export default createContact