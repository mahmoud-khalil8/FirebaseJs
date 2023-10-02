import { getFirestore, collection,addDoc,onSnapshot} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"

const db=getFirestore() ;
const dbRef=collection(db,"contacts") ;
let contacts= [] ;
// Get
const getContacts =async()=>{ 
  //const docSnap=await getDocs(dbRef) ;
  try{
   await onSnapshot(dbRef,docSnap=>{
     contacts=[] ;
     docSnap.forEach((doc) =>{
       let contact= doc.data() ;
       contact.id=doc.id ;
       contacts.push(contact)
     })
     showContacts(contacts) ;
    }) 
  }catch(err){
    console.log("get contacts"+err) ;
  }
}
getContacts() ;

const contactWrapper= document.querySelector(".contact-wrapper") ;
const showContacts=(contacts)=>{
  contactWrapper.innerHTML="" ;
  contacts.forEach(contact =>{
    const newContact = document.createElement("div");

    newContact.innerHTML = `
    <div class="circle">AB</div>
    <div class="contact-details" id=${contact.id} >
        <h3 class="contact-title">${contact.firstName} ${contact.lastName}</h3>
        <p class="contact-subtitle">${contact.email}</p>
      </div>
      <div>

          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
      </div>`
    contactWrapper.appendChild(newContact);
    newContact.classList.add("contact-item")
  })
}
const addBtn=document.getElementById("add-btn") ;
const closeBtn=document.getElementById("close-btn") ;
const formOverlay=document.getElementById("form-overlay") ;
const submit=document.getElementById("submit") ;

const firstName=document.getElementById("first-name") ;
const lastName=document.getElementById("last-name") ;
const age=document.getElementById("age") ;
const phone=document.getElementById("phone") ;
const email=document.getElementById("email") ;

const phoneRegex = /^\d{11}$/; 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const showForm=()=>{
  formOverlay.style.display="flex" ;
}

addBtn.addEventListener("click",showForm) ;
closeBtn.addEventListener("click",()=>{
  formOverlay.style.display="none" ;
}) ;

const hide=(e)=>{
  if(e instanceof Event){
    if(e.target===e.currentTarget ){ //target refering to the item clicked , currentTarget is refering to the parent
      formOverlay.style.display="none" ;
    }

  }
  else{
    formOverlay.style.display="none" ;
  }
}

formOverlay.addEventListener("click",hide) ;
const submitClicked=async(e)=>{
  e.preventDefault() ;
  checkErrors([firstName,lastName,age,phone,email])
  if(Object.keys(errs).length===0){
    try{
      
      await addDoc(dbRef,{
        firstName:firstName.value,
        lastName:lastName.value,
        age:age.value ,
        phone:phone.value ,
        email:email.value
      })
      hide() ;
    }
    catch(err){
      displayErrorMessage("Unable to store data right now. Please try again later.");
    }
  } 
}
const errs={} ;

const checkErrors=(errorsInput)=>{
  errorsInput.forEach(element => {
    const errMsg=document.querySelector(`.err.${element.id}`)
    if(element==phone&& phoneRegex.test(phone.value)==false){
      errMsg.textContent="wrong phone number" ;
      errMsg.style.visibility="visible";
      errs[element.id]=element.value ;
    }
    else if(element==email&& emailRegex.test(email.value)==false){
      errMsg.textContent="unvalid email" ;
      errMsg.style.visibility="visible";
      errs[element.id]=element.value ;
    }
    else if(element.value.trim()===""){
      errMsg.textContent=`${element.id} is empty`
      errMsg.style.visibility="visible";
      errMsg.parentNode.classList.add("notValid")
      errs[element.id]=element.value ;
    }
    else{
      delete errs[element.id] ;
      errMsg.textContent=" " ;
      errMsg.parentNode.classList.remove("notValid");
    }
  });
}
const displayErrorMessage = (message) => {
  let h3=document.createElement('h3') ;
  h3.textContent=message ;
  const errNode=document.querySelector('#form')
  h3.style.color="red"
  errNode.prepend(h3) ;

};
submit.addEventListener("click",submitClicked)

//click to show information
const showInformation=(event) =>{
  const id =event.target.closest("div").getAttribute("id") ;  
  displayInformationById(id) ;
}
const rightCol=document.getElementById("right")
const details=document.createElement("div") ;


const displayInformationById=(id)=>{
  details.innerHTML=""
  const contact=contacts.find(contact=>{
    return contact.id===id ;
  })
  details.innerHTML=`
    <dev class="details-container" id="right">
      <p> First name &nbsp; : &nbsp; ${contact.firstName}</p><br>
      <p>Last name &nbsp;:&nbsp;  ${contact.lastName}</p><br>
      <p>age &nbsp;: &nbsp; ${contact.age}</p><br>
      <p>phone &nbsp;:&nbsp; ${contact.phone}</p><br>
      <p>email &nbsp;:&nbsp;  ${contact.email}</p><br>
    </dev>

  
  `

  rightCol.appendChild(details) ;
}
contactWrapper.addEventListener("click",showInformation) ;

 
