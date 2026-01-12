// a function to collect data from the contact form
function contactFormCollector(event) {

  //prevent default behavior of the browser
  //to reload the page on sending a form
  event.preventDefault();

  let formContent = {}; //new Object
  for (let { type, name, value, checked } of document.forms.contactForm) {
    //if checkbox used if checked true/false as value
    if (type === 'checkbox') {
      formContent[name] = checked;
    }
    //if radio button only use value from checked b
    //button in the group
    else if (type === 'radio') {
      if (checked) {
        formContent[name] = value;
      }
    }
    //if no name (our submit button has no name!)
    //don't do anything
    else if (!name) {
      continue;
    }
    //add the property everything else
    else {
      formContent[name] = value;
    }
  }
  alert(JSON.stringify(formContent));

  //next step how do i contact REST-api
  //from js (and how do i get my backend to run)
}

//grab the contactform using document.queryselector
//and add our collect function from above
//on a submit event listener
document
  .querySelector('form[name="contactForm"]')
  .addEventListener('submit', contactFormCollector);
