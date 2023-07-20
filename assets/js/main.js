var navLinkName=["Početna","O nama","Prodavnica","O autoru"];
var navLinks = ["index.html", "about.html", "shop.html", "aboutme.html"];

let html = "<ul>"
for(let i=0; i<navLinks.length; i++){
    html+=`<li><a href="${navLinks[i]}">${navLinkName[i]}</a></li>`
}
html+="</ul>"
document.querySelector("#ik-navigation").innerHTML = html;

document.querySelector("#ik-navigation").querySelector("ul").querySelectorAll("a")[2].setAttribute("class", "active");

var links = document.querySelector("#ik-navigation").querySelectorAll("a");
const lokacija = location.href;
for(let i=0; i<links.length; i++){
  if(links[i].href === lokacija){
    document.querySelector("#ik-navigation").querySelector("ul").querySelectorAll("a")[2].removeAttribute("class", "active");
    links[i].className = "active";
  }
}



var hamIcon = document.querySelector("#ik-ham-icon");
document.querySelector("#ik-nav-ham").addEventListener("click", hamMenu);
function hamMenu() {
  var navigacija = document.getElementById("ik-navigation");
  if (navigacija.style.display === "block") {
    navigacija.style.display = "none";
    hamIcon.classList.add("fa-bars");
    hamIcon.classList.remove("fa-times");
  } else {
    navigacija.style.display = "block";
    hamIcon.classList.add("fa-times");
    hamIcon.classList.remove("fa-bars");
  }
}
var slika = document.querySelector("#ik-logo-picture");
$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $("header").addClass("ik-header-scroll");
      slika.src = "assets/img/Logo.png";
  } else {
     $("header").removeClass("ik-header-scroll");
     slika.src = "assets/img/Logo1.png";
  }
});
let sviTagoviP = document.getElementsByTagName("p");
for(let i=0; i<sviTagoviP.length; i++){
  sviTagoviP[i].classList.add("ik-text-black");
}

let sviTagoviH2 = document.getElementsByTagName("h2");
for(let i=0; i<sviTagoviH2.length; i++){
  sviTagoviH2[i].classList.add("ik-text-red");
}

let sviTagoviH3 = document.getElementsByTagName("h3");
for(let i=0; i<sviTagoviH3.length; i++){
  sviTagoviH3[i].classList.add("ik-text-red");
}

let sviTagoviH5 = document.getElementsByTagName("h5");
for(let i=0; i<sviTagoviH5.length; i++){
  sviTagoviH5[i].classList.add("ik-text-red");
}
var pages = "<ul>";
for(let i=0; i<navLinks.length; i++){
    pages+=`<li>
            <a href=${navLinks[i]}><i class="fas fa-chevron-right"></i>${navLinkName[i]}</a>
          </li>`
}
pages+="</ul>";
var navPages = document.getElementById("pages");
navPages.innerHTML = pages;

let url = window.location.pathname;

if(url=="/" || url =="/index.html"){
    let popularniProizvodi = "";
    let ppSlike = ["headphones.jpg", "mouse.jpg", "keyboard.jpg"];
    let ppAlt = ["Loading Headphones", "Loading Mouse", "Loading Keyboard"];
    let ppNaslov = ["Slušalice", "Miš", "Tastatura"]
    let ppCene= ["50.40&#8364;", "36.40&#8364;", "20.24&#8364;"];
    let ppText = ["Computer-Gaming slušalice XA-202 sa mikrofonom", 
    "Computer-Gaming miš KS-101 na baterije sa ručnim hladjenjem" ,
    "Computer-Gaming žičana tastatura KQ-54 sa led svetlima"];

    for(let i =0; i<ppAlt.length; i++){
      popularniProizvodi += `<div class='col-12 col-md-6 col-lg-4'  data-aos="fade-up">
                              <div class="card ik-card mb-3" style="width: 100%;">
                                <img src="assets/img/${ppSlike[i]}" class="card-img-top" alt="${ppAlt[i]}"/>
                                <div class="card-body">
                                  <h5 class="card-title">${ppNaslov[i]}</h5>
                                  <p class="card-text">${ppText[i]}</p>
                                  <div class="ik-rewiev-div d-flex align-content-between">
                                    <ul class="d-flex ik-rewiev">
                                      <li><i class="fas fa-star"></i></li>
                                      <li><i class="fas fa-star"></i></li>
                                      <li><i class="fas fa-star"></i></li>
                                      <li><i class="fas fa-star"></i></li>
                                      <li><i class="fas fa-star"></i></li>
                                    </ul>
                                    <p class="d-block ml-auto">Price: ${ppCene[i]}</p>
                                  </div>
                                  <a href="shop.html" class="btn btn-outline-danger ik-btn">Pogledajte sve proizvode</a>
                                </div>
                              </div>
                            </div>`
    }

    document.getElementById("ik-popular-products").innerHTML = popularniProizvodi;



    let nasiPartneri="";
    let npSlike = ["our-partner-beats.png","our-partner-brand.jpeg",
    "our-partner-fox.png","our-partners-bull.png","our-partners-egg.png",
    "our-partners-wolf.png"];
    let npAlt = ["Loading our partners beats","Loading our partners brand","Loading our partners fox",
    "Loading our partners bull","Loading our partners egg","Loading our partners wolf"];
    let npHead = ["Beats kompanija","Brand kompanija","Fox kompanija"
    ,"Bull kompanija","Egg kompanija","Wolf kompanija"];

    for(let i=0; i< npAlt.length; i++){
      nasiPartneri += `<div class="col-12 col-sm-6 col-md-4 col-xl-2 mb-4" data-aos='fade-up'>
                        <div class="ik-op-pic d-flex justify-content-center">
                          <img src="assets/img/${npSlike[i]}" alt="${npAlt[i]} class="img-fluid"/>
                        </div>
                        <div class="ik-op-text text-center">
                            <h5>${npHead[i]}</h5>
                        </div>
                        </div>`;
    }
    document.querySelector("#ik-our-partners").innerHTML = nasiPartneri;
}
if(url=="/about.html"){
  document.getElementById("ik-modal-btn").addEventListener("click", openModal)

  var modal = document.getElementById("modal");
  function openModal(){
      modal.classList.remove("ik-hide");
      modal.classList.add("ik-show");
  }
  
  
  document.getElementById("ik-modal-btn-close").addEventListener("click", closeModal);
  
  function closeModal(){
      modal.classList.remove("ik-show");
      modal.classList.add("ik-hide");
  }
  
  
  let nizImena = ["Ponedeljak - Petak", "Subota", "Nedelja"];//Ako promenim ime niza kod mi ne radi
  let nizBrojeviIndeksa = ["08-22", "09-21", "10-20"];//Ako promenim ime niza kod mi ne radi
  let tagTable3 = document.createElement("table");
  tagTable3.setAttribute("class", "table-dark table");
  
  for(let i = 0; i < 2; i++){
      let tr = document.createElement("tr");
  
      for(let j = 0; j < nizImena.length; j++){
          let td = document.createElement("td");
  
          if(i % 2 == 0){
              var sadrzajTd = document.createTextNode(nizImena[j]);
          }
          else{
              var sadrzajTd = document.createTextNode(nizBrojeviIndeksa[j]);
          }
  
          td.appendChild(sadrzajTd);
          tr.appendChild(td);
      }
      tagTable3.appendChild(tr);
  }
  
  document.querySelector("#table-d").appendChild(tagTable3);
}
if(url == "/shop.html"){

  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready()
  }
  
  function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
  
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
  
    var addToCartButtons = document.getElementsByClassName('ik-btn');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
        
    }
  
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
  }
  
  function purchaseClicked() {
      var answer = confirm("Da li hoćete da kupite?");
      if(answer){
        location.href = 'contact.html';
      }else{
        return false;
      }
      var cartItems = document.getElementsByClassName('cart-items')[0];
      while (cartItems.hasChildNodes()) {
          cartItems.removeChild(cartItems.firstChild);
      }
      updateCartTotal();
    
  }
  
  function removeCartItem(event) {
    var answer = confirm("Da li ste sigurni da želite da uklonite proizvod?");
    if(answer){
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
      updateCartTotal();
    }
  }
  
  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
  }
  var modal = document.getElementById("modal-shop");
  function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    
    modal.classList.remove("ik-hide");
    modal.classList.add("ik-show");
    setTimeout(closeModal, 2000);
          
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
    
  }
  
  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    cartRow.classList.add('d-flex');
    cartRow.classList.add('justify-content-between');
    cartRow.classList.add('align-items-center');
    cartRow.classList.add('mb-3');
    cartRow.classList.add('ik-border');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Već imate ovaj proizvod u korpi.');
            closeModal();
            return
        }
    }
    var cartRowContents = `<div class="cart-item ik-cart cart-column d-flex flex-column">
                                  <img class="cart-item-image" src="${imageSrc}" width="120" height="100">
                                  <span class="cart-item-title">${title}</span>
                              </div>
                              <span class="cart-price ik-cart cart-column">${price}</span>
                              <div class="cart-quantity cart-column d-flex">
                                  <input class="cart-quantity-input form-control mr-1" type="number" value="1">
                                  <button class="btn btn-danger" type="button">UKLONI</button>
                              </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
  }
  
  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('&#8364;', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
      }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerHTML =total+"&#8364;";
  }
  function closeModal(){
    modal.classList.remove("ik-show");
    modal.classList.add("ik-hide");
  }
  let proizvodi = "";
  let ppSlike = ["headphones.jpg","shop-keyboard3.jpg","shop-mouse1.jpeg",
  "shop-headphones-1.jpg", "mouse.jpg","shop-keyboard-2.jpg",
  "shop-headphones-2.jpg","shop-mouse2.jpeg", "keyboard.jpg",];
  let ppAlt = ["Loading Headphones", "Loading Keyboard",
  "Loading Mouse", "Loading Headphones","Loading Mouse",
  "Loading Keyboard","Loading Headphones","Loading Mouse", 
  "Loading Keyboard"];
  let ppNaslov = ["Slušalice XA-202","Tastatura KX-32", "Kompjuterski miš GF-80","Slušalice MB-5","Kompjuterski miš KS-10","Tastatura KX-3","Slušalice TY-7","Kopjuterski miš F-3","Tastatura KQ-54"]
  let ppCene= ["50.40&#8364;","23.40&#8364;","38.40&#8364;","39.40&#8364;"
  ,"36.40&#8364;","22.40&#8364;","54.40&#8364;", "34.40&#8364;", "20.24&#8364;"];
  let ppText = ["Computer-Gaming slušalice XA-202 sa mikrofonom", 
   "Computer-Gaming slušalice XA-202 sa mikrofonom",
   "Computer-Gaming slušalice XA-202 sa mikrofonom",
   "Computer-Gaming slušalice XA-202 sa mikrofonom",
   "Computer-Gaming miš KS-10 na baterije sa ručnim hladjenjem" ,
   "Computer-Gaming slušalice XA-202 sa mikrofonom",
   "Computer-Gaming slušalice XA-202 sa mikrofonom",
   "Computer-Gaming slušalice XA-202 sa mikrofonom",
   "Computer-Gaming žičana tastatura KQ-54 sa led svetlima"];
   let klasaItema=["ik-headphones","ik-keyboard","ik-mouse"
  ,"ik-headphones","ik-mouse","ik-keyboard","ik-headphones",
  "ik-mouse","ik-keyboard"];
  
  
  for(let i =0; i<ppAlt.length; i++){
    proizvodi += `<div class='col-12 col-md-6 col-lg-4 ik-items cart-row ${klasaItema[i]}'>
                            <div class="card cart-item mb-3 ik-card" style="width: 100%;">
                              <img src="assets/img/${ppSlike[i]}" class="card-img-top shop-item-image" alt="${ppAlt[i]}"/>
                              <div class="card-body">
                                <h5 class="card-title shop-item-title">${ppNaslov[i]}</h5>
                                <p class="card-text">${ppText[i]}</p>
                                <div class="ik-rewiev-div shop-item-details d-flex align-content-between">
                                  <ul class="d-flex ik-rewiev">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                  </ul>
                                  <p class="d-block shop-item-price ml-auto">${ppCene[i]}</p>
                                </div>
                                <button class="btn btn-outline-danger ik-btn" type="button">Dodaj u korpu</button>
                              </div>
                            </div>
                          </div>`;
  }
  
  document.getElementById("shop-items").innerHTML = proizvodi;
  
  $(document).ready(function(){
      
    slideShow();
  
    function slideShow(){
  
        var trenutniElement = $("#slider .slider-active");
        // console.log(trenutniElement);
  
        var sledeciElement = trenutniElement.next().length ? trenutniElement.next() : trenutniElement.parent().children(':first');
  
        sledeciElement.addClass("slider-active");
        trenutniElement.removeClass("slider-active");
  
        setTimeout(slideShow, 2500);
    }
  
    $(".ik-shop-btn").click(function (){
        var atribut = $(this).attr("data-li");
  
        $(".ik-shop-btn").removeClass("active-shop-btn");
        $(this).addClass("active-shop-btn");
  
        $(".ik-items").hide();
        if(atribut == "mouse"){
            $(".ik-mouse").show();
        }else if(atribut == "keyboard"){
            $(".ik-keyboard").show();
        }else if(atribut == "headphones"){
            $(".ik-headphones").show();
        }else{
            $(".ik-items").show();
        }
    })
  
  
  });
}
if(url == "/contact.html"){
  let town= ["Beograd", "Novi Sad", "Niš", "Kragujevac", "Subotica"];
  let valueTown = [1,2,3,4,5];
  let selectTag = document.createElement("select");
  selectTag.setAttribute("class", "form-control");
  let optionTag = document.createElement("option");
  let content = document.createTextNode("Izaberite grad");
  selectTag.setAttribute("id", "ddlTown");
  optionTag.setAttribute("value", "0");
  optionTag.appendChild(content);
  selectTag.appendChild(optionTag);

  for(let i=0; i<town.length; i++){
      let optionsTag = document.createElement("option");
      optionsTag.setAttribute("value", valueTown[i]);
      let contents = document.createTextNode(town[i]);
      optionsTag.appendChild(contents);
      selectTag.appendChild(optionsTag);
  }
  document.querySelector(".ddl-div").appendChild(selectTag);

  

  let button = document.querySelector("#btn-sub");
  button.addEventListener("click", function(){
      var errNum=0;
      let nameField = document.querySelector("#tbName");
      let nameValue = document.querySelector("#tbName").value;
      let reName = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})?$/;
      checkReg(reName, nameField, nameValue);

      let lastField = document.querySelector("#tbLast");
      let lastValue = lastField.value;
      let reLast = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})?$/;
      checkReg(reLast, lastField, lastValue);

      let ddl = document.querySelector("#ddlTown");
      let selected = document.querySelector("#selectedValue");
      if(ddl.options[ddl.options.selectedIndex].value == "0"){
          addDanger(selected);
          errNum++;
      }
      else{
          addSuccess(selected);
      }

      let adressField = document.querySelector("#tbAdress");
      let adressValue = adressField.value;
      let reAdress = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})?\s[1-9]([0-9])?([0-9])?$/;
      checkReg(reAdress, adressField, adressValue);

      let postField = document.querySelector("#tbPost");
      let postValue = postField.value;
      let rePost = /^11[0-4][0-9][0-9]|11500|21[0-4][0-9][0-9]|18[0-3][0-9][0-9]|24[0-4][0-9][0-9]|34[0-3][0-9][0-9]$/;
      checkReg(rePost, postField, postValue);

      let telField = document.querySelector("#tbTel");
      let telValue = telField.value;
      let reTel = /^(\+3816[0-689][\d]{6,7})$/;
      checkReg(reTel, telField, telValue);

      let rbCard = document.getElementsByName("rbCard");
      let rbText = document.querySelector("#rbText");
      var rbValue = "";
      for(let i = 0; i < rbCard.length; i++){
          if(rbCard[i].checked){
              rbValue = rbCard[i].value;
              break;
          }
      }
      if(rbValue == ""){
        addDanger(rbText);
        errNum++;
      }
      else{
        addSuccess(rbText);
      }

      let numCardField = document.querySelector("#tbCardNumber");
      let numCardValue = numCardField.value;
      let reCard = /^[0-9][0-9][0-9][0-9][/][0-9][0-9][0-9][0-9][/][0-9][0-9][0-9][0-9][/][0-9][0-9][0-9][0-9]$/;
      checkReg(reCard, numCardField, numCardValue);

      let expField = document.querySelector("#tbExp");
      let expValue = expField.value;
      let reExp = /^[0][1-9][/](1[789]|2[0-4])|1[0-2][/](1[789]|2[0-4])$/;
      checkReg(reExp, expField, expValue);

      let secCField = document.querySelector("#tbSecC");
      let secCValue = secCField.value;
      let reSecC = /^[0-9][0-9][0-9][0-9]$/;
      checkReg(reSecC, secCField, secCValue);

      
      function checkReg(reg, field, value){
        if(reg.test(value)){
          addSuccess(field.nextElementSibling);
        }else{
          addDanger(field.nextElementSibling);
          errNum++;
        }
      }
      function addDanger(x){
        x.innerHTML = "<i class='fas fa-times-circle'></i>";
        x.classList.add("ik-alert");
        x.classList.add("alert-danger");
        x.classList.remove("alert-success");
      }
      function addSuccess(x){
        x.innerHTML = "<i class='fas fa-check-circle'></i>";
        x.classList.add("ik-alert");     
        x.classList.add("alert-success"); 
        x.classList.remove("alert-danger");
      }
      if(errNum==0){
        let modalContact = document.getElementById("contact-modal");
        modalContact.classList.remove("ik-hide");
        modalContact.classList.add("ik-show");
        document.getElementById("ik-btn-modal-contact").addEventListener("click", closeModal);
        function closeModal(){
          modalContact.classList.remove("ik-show");
          modalContact.classList.add("ik-hide");
        }
      }
  })

}

