"use strict";let data={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};const inputName=document.querySelector(".js-input-name"),inputJob=document.querySelector(".js-input-job"),inputEmail=document.querySelector(".js-input-email"),inputLinkedin=document.querySelector(".js-input-linkedin"),inputGithub=document.querySelector(".js-input-github"),inputPhone=document.querySelector(".js-input-phone"),inputPalette1=document.querySelector(".js_palette1"),inputPalette2=document.querySelector(".js_palette2"),inputPalette3=document.querySelector(".js_palette3"),inputPalette4=document.querySelector(".js_palette4"),inputPalette5=document.querySelector(".js_palette5");function readForm(){data.name=document.querySelector(".js-input-name").value,data.job=document.querySelector(".js-input-job").value,data.email=document.querySelector(".js-input-email").value,data.linkedin=document.querySelector(".js-input-linkedin").value,data.github=document.querySelector(".js-input-github").value,data.phone=document.querySelector(".js-input-phone").value,data.palette=document.querySelector("input[name=paletteoptions]:checked").id,updateAll()}function updateCardItem(e,t){const n=data[e];let a;a=n||t,document.querySelector(".js-"+e).innerHTML=a}function updateCardLink(e,t){const n=data[e];let a;a=n?t+n:"",document.querySelector(".js-"+e).href=a,hideIcon(e,n)}function updateCardLinkOnStart(e,t){t&&(document.querySelector(".js-"+e).href=t,hideIcon(e,t))}function removeClassesFromElement(e,t){e.classList.remove("js_palette1"+t),e.classList.remove("js_palette2"+t),e.classList.remove("js_palette3"+t),e.classList.remove("js_palette4"+t),e.classList.remove("js_palette5"+t)}function removeClassesFromElements(e,t){for(let n=0;n<e.length;n++)removeClassesFromElement(e[n],t)}function addClassToElements(e,t){for(let n=0;n<e.length;n++)e[n].classList.add(t)}function updateCardPalette(){const e=document.querySelector(".js-name"),t=document.querySelector(".js-border-box"),n=document.querySelectorAll(".js-icon"),a=document.querySelectorAll(".js-icon-container");removeClassesFromElement(e,"_color"),removeClassesFromElement(t,"_border_box"),removeClassesFromElements(n,"_color"),removeClassesFromElements(a,"_border_color");const o="js_palette"+data.palette;e.classList.add(o+"_color"),t.classList.add(o+"_border_box"),addClassToElements(n,o+"_color"),addClassToElements(a,o+"_border_color")}function hideIcon(e,t){const n=document.querySelector(".jscontainer-"+e);""!==t?n.classList.remove("hidden-icon"):n.classList.add("hidden-icon")}inputName.addEventListener("keyup",readForm),inputJob.addEventListener("keyup",readForm),inputEmail.addEventListener("keyup",readForm),inputLinkedin.addEventListener("keyup",readForm),inputGithub.addEventListener("keyup",readForm),inputPhone.addEventListener("keyup",readForm),inputPalette1.addEventListener("change",readForm),inputPalette2.addEventListener("change",readForm),inputPalette3.addEventListener("change",readForm),inputPalette4.addEventListener("change",readForm),inputPalette5.addEventListener("change",readForm);const cardPreviewName=document.querySelector(".js-name"),cardPreviewBorderBox=document.querySelector(".js-border-box"),cardPreviewIcons=document.querySelectorAll(".js-icon"),cardPreviewIconsContainer=document.querySelectorAll(".js-icon-container"),clearButton=document.querySelector(".js-clear-button");function handleClearButtonClick(){document.querySelector(".js-form").reset(),data.palette="1",data.name="",data.job="",data.phone="",data.email="",data.linkedin="",data.github="",data.photo="",updateAll()}clearButton.addEventListener("click",handleClearButtonClick);const collContents=document.querySelectorAll(".js-collapsable"),collButtons=document.querySelectorAll(".js-coll");function createCollapsibleButtonListeners(){for(let e=0;e<collButtons.length;e++)collButtons[e].addEventListener("click",(function(){collContents[e].classList.toggle("content")}))}createCollapsibleButtonListeners();const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const createCardButton=document.querySelector(".js-createcard__button"),shareContainer=document.querySelector(".js-share__section");function updateButtonStatus(){""===data.name?(createCardButton.classList.add("createcard__button--inactive"),createCardButton.disabled=!0):(createCardButton.classList.remove("createcard__button--inactive"),createCardButton.disabled=!1)}function createCard(){event.preventDefault()}function saveInfo(){localStorage.setItem("data",JSON.stringify(data))}function getInfo(){return JSON.parse(localStorage.getItem("data"))}function updateAll(e){console.log("hola"),e?(console.log(e),inputName.value=e.name,inputJob.value=e.job,inputEmail.value=e.email,inputLinkedin.value=e.linkedin,inputGithub.value=e.github,inputPhone.value=e.phone,updateCardItem("name",e.name||"Nombre Apellido"),updateCardItem("job",e.job||"Front End Developer"),updateCardLinkOnStart("email",e.email&&"mailto:"+e.email),updateCardLinkOnStart("linkedin",e.linkedin&&"https://linkedin.com/in/"+e.linkedin),updateCardLinkOnStart("github",e.github&&"https://github.com/"+e.github),updateCardLinkOnStart("phone",e.phone&&"tel:+34"+e.phone)):(updateCardItem("name","Nombre Apellido"),updateCardItem("job","Front End Developer"),updateCardLink("email","mailto:"),updateCardLink("linkedin","https://linkedin.com/in/"),updateCardLink("github","https://github.com/"),updateCardLink("phone","tel:+34"),updateCardPalette(),updateButtonStatus(),saveInfo())}createCardButton.addEventListener("click",createCard);const backdata=getInfo();updateAll(backdata);