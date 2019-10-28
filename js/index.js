const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//header nav and img
let navItems = document.querySelectorAll('a');
for (i = 0; i < navItems.length; i++){
  navItems[i].innerText = siteContent.nav[`nav-item-${i + 1}`];
}


let ctaText = document.querySelector('.cta > .cta-text > h1');

let textTemp = siteContent['cta']['h1'];
textTemp = textTemp.split(' ');
ctaText.innerHTML = textTemp[0] + "<br>" + textTemp[1] + "<br>" + textTemp[2];
// console.log(textTemp);
// Cta section
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent.cta['img-src']);

let ctaButton = document.querySelector('.cta > .cta-text button');
ctaButton.innerText = siteContent.cta['button'];

//main content section
let featuresElement = document.querySelector('.main-content > .top-content > .text-content > h4');
featuresElement.innerText = siteContent['main-content']['features-h4'];
featuresElement = document.querySelector('.main-content > .top-content > .text-content > p');
featuresElement.innerText = siteContent['main-content']['features-content'];

let aboutElement = document.querySelector('.main-content > .top-content > .text-content:nth-child(2) > h4');
aboutElement.innerText = siteContent['main-content']['about-h4'];
aboutElement = document.querySelector('.main-content > .top-content > .text-content:nth-child(2) > p');
aboutElement.innerText = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
// main content lower
let servicesElement = document.querySelector('.bottom-content > .text-content:nth-child(1) > h4');
servicesElement.innerText = siteContent['main-content']['services-h4'];
servicesElement = document.querySelector('.bottom-content > .text-content:nth-child(1) > p');
servicesElement.innerText = siteContent['main-content']['services-content'];

let productElement = document.querySelector('.bottom-content > .text-content:nth-child(2) > h4');
productElement.innerText = siteContent['main-content']['product-h4'];
productElement = document.querySelector('.bottom-content > .text-content:nth-child(2) > p');
productElement.innerText = siteContent['main-content']['product-content'];

let visionElement = document.querySelector('.bottom-content > .text-content:nth-child(3) > h4');
visionElement.innerText = siteContent['main-content']['vision-h4'];
visionElement = document.querySelector('.bottom-content > .text-content:nth-child(3) > p');
visionElement.innerText = siteContent['main-content']['vision-content'];

//contact
let contentElement = document.querySelector('.contact > h4');
contentElement.innerText = siteContent.contact['contact-h4'];

let tempAdd = siteContent.contact.address;
tempAdd = tempAdd.split(/ (?=So)/);
// console.log(tempAdd);

contentElement = document.querySelector('.contact > p:nth-child(2)');
contentElement.innerHTML = `${tempAdd[0]} <br> ${tempAdd[1]}`;




contentElement = document.querySelector('.contact > p:nth-child(3)');
contentElement.innerText = siteContent.contact['phone'];
contentElement = document.querySelector('.contact > p:nth-child(4)');
contentElement.innerText = siteContent.contact['email'];

//footer
let footerElement = document.querySelector('footer > p');
footerElement.innerText = siteContent.footer.copyright;

// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser


let navElement = document.querySelector('.container > header > nav');
let newElement = document.createElement("a");
newElement.setAttribute('href', '#');
newElement.innerText = "First";
navElement.prepend(newElement);
let secondElement = document.createElement("a");
secondElement.setAttribute('href', '#');
secondElement.innerText = "Last";
navElement.append(secondElement);

document.querySelectorAll('.container > header > nav > a').forEach(element => {
      element.style.color = 'green';
});








