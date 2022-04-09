// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
info="The <a href=&#34;#&#34;>Link</a><h1>Philippines</h1>, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. It is situated in the western Pacific Ocean, and consists of about 7,640 islands, that are broadly categorized under three main geographical divisions from north to south: Luzon, Visayas, and Mindanao.<button></button>"

document.write(info)
