// 1) On the contact us page, ask the user for the following details(5 marks):
// Company Name
// Phone number
// Location
// Booking dates -- i should choose date from a calendar 


let user = prompt("Please enter your Company Name", "Sauti Sol");


if (user != null) {
  document.getElementById("w3-button w3-bar-item").innerHTML =
  "Hello " + person + "! How are you today?";
}
// const myWindow = window.open();
// myWindow.document.write("Company Name");






var myObject = {
    name: "Adalab",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();


// 4)  What will the code below output to the console and why?

// The output of the above code is:outer func:  this.name = Adalab
//                                 outer func:  self.name = Adalab
//                                 inner func:  this.name = undefined
//                                 inner func:  self.name = Adalab

// Trying to console inner func returns undefined as the this keyword refers
// to the globalobject myObject  which does not have an assigned value to its inner func



var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}


// In your own words, explain how the script for moving the carousel works. (5 
// marks)
// the images are displayed after 3 seconds of looping through carousel 
// function var i is the starting point that checks the length of the
//  myslides and displays the current image


