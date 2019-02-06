document.querySelector("body").style.background = "boldenrob";

const inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[\w-]{2,20}$/,
  //letter, digits, "-" and "_" only. 2-20 long
  mail: /^\w+([\w-\.]+)@\w+([\w-]+)\.(\w{2,5})(\.\w{2,5})?$/,
  //start with a letter, e.g: com-goon@yandex.com.io
  tel: /^(\+\d{3})?(\s)?(\d{8})$/,
  // 8 digits long or +227 12345678
  pwd: /^[\w\.-@#\$%\^&\*\(\)\[\]<;"':>,\/\?{}\\|`~\s]{6,12}$/
  //at least, 6 long. at most, 12 long
};

inputs.forEach(input => {
  //traversing the inputs
  input.addEventListener("keyup", function(e) {
    //listening to the key hits
    // e.target.attributes.name.value ==> represents one of the patterns' name
    var regex = patterns[e.target.attributes.name.value];
    // e.target.value ==> the value beeing typed
    var val = e.target.value;

    if (regex.test(val)) {
      //testing for a match
      //true or false
      e.target.nextSibling.nextSibling.style.display = "none"; //targeted input's warning
      e.target.style.borderColor = "#4CAF50"; //styling the targeted input's border-color
    } else {
      //case the typed doesn't match the required pattern
      e.target.nextSibling.nextSibling.style.display = "block"; //display the warning
      e.target.nextSibling.nextSibling.style.color = "tomato"; //given it color
      e.target.style.borderColor = "tomato"; //border-color warning

      if (!val) {
        //case of null value
        // console.log("the val", val);
        // e.target.style.borderColor = "transparent";
        e.target.style.borderColor = "initial"; // border-color turns to initial color
        e.target.nextSibling.nextSibling.style.display = "none"; //hidden the warning
      }
    }
    // verify(patterns[e.target.attributes.name.value], e.target.value);
  });

  // input.addEventListener("blur", function(e) {
  //   if (!e.target.value) {
  //     console.log(e.target.value);
  //     e.target.style.borderColor = "none";
  //   } else {
  //     e.target.style.borderColor = "blue";
  //   }
  // });
});

// function verify(regex, val) {
//   console.log(regex.test(val));
// }

const form = document.querySelector("form"); //the whole form

form.addEventListener("submit", function(e) {
  // e.preventDefault();

  const p = document.querySelectorAll("p");

  var countWarnin = 0; //variable to hold the number of warnings

  p.forEach(pElement => {
    //each warning
    // console.log(pElement.getAttribute("style"));
    if (pElement.style.display == "block") {
      //checking if the "p" is displayed or not
      // console.log(pElement.style.display);
      countWarnin += 1; //if yes, counting it
    }
    // console.log(countWarnin);
  }); //end of the foreach

  if (countWarnin != 0) {
    //verifying the value of the number of warning
    alert("PLS, CHECK YOUR ENTRIES!"); //inviting the user to check on his entries
    e.preventDefault(); //preventing refreshing the page so the values wont get lost
  } else {
    var msg = confirm("DO YOU WANT TO SUBMIT!"); //message to be displayed, with 'cancel' and 'OK' bottons
    if (msg !== true) {
      //checking which button was clicked by the user
      alert("EDIT YOUR ENTRIES!"); //prompt the user
      e.preventDefault(); //giving the user the possibility to edit
    } else {
      alert("ENTRIES SUBMITTED!"); //refresh after this message
    }
  }
});
