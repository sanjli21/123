const firebaseConfig = {
    apiKey: "AIzaSyBjjEkMWEgl4tkgqSd4BVHNg8UP7ZVYqpA",
    authDomain: "temp-5f4de.firebaseapp.com",
    databaseURL: "https://temp-5f4de-default-rtdb.firebaseio.com",
    projectId: "temp-5f4de",
    storageBucket: "temp-5f4de.appspot.com",
    messagingSenderId: "325958949637",
    appId: "1:325958949637:web:c9def6ad16b4dbbed4b56c",
    measurementId: "G-RYHXF0G5L0"
  };
//initialise firebase 
firebase.initializeApp(firebaseConfig);
  const testFormDB= firebase.database().ref('testForm')
  document.getElementById("testForm").addEventListener("submit",submitForm);
  function submitForm(e) {
    e.preventDefault();
    var x = getElementVal('1');
    var y = getElementVal('2');
    var z = getElementVal('3');
    var w = getElementVal('4');
    var a = getElementVal('5');
    var b = getElementVal('6');
    var c = getElementVal('7');
    
    var totalMarks= getElementVal('totalMarks');
    console.log("Value of Question 1:", x);
    console.log("Value of Question 2:", y);
    console.log("Value of Question 3:", z);
    console.log("Value of Question 4:", w);
    console.log("Value of Question 5:", a);
    console.log("Value of Question 6:", b);
    console.log("Value of Question 7:", c);
    
    console.log("Total Marks are:",totalMarks );
    saveMessages(x,y,z,w,a,b,c,totalMarks);
  
    
    
    

 //   enable alert
 document.querySelector(".alert").style.display = "block";

 //   remove the alert
 setTimeout(() => {
   document.querySelector(".alert").style.display = "none";
 }, 3000);

 //   reset the form
 document.getElementById("testForm").reset();
}
const saveMessages = (x,y,z,w,a,b,c,totalMarks) => {
    var newtestForm = testFormDB.push();
  
    newtestForm.set({
      x:x,
      y:y,
      z:z,
      w:w,
      a:a,
      b:b,
      c:c,
      totalMarks:totalMarks,
    });
  };

const getElementVal = (id) => {
    var options = document.getElementById(id).querySelectorAll('input[type=radio]');
    var selectedValue = '';
    options.forEach(option => {
        if (option.checked) {
            selectedValue = option.value;
        }
    });
    return selectedValue;
};

function calculateTotal() {
  var totalMarks = 0;

  // Iterate through each question
  for (var i = 1; i <= 7; i++) {
      var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');

      if (selectedOption) {
          // Assign marks based on selected option
          switch(selectedOption.value) {
              case 'rarely':
                  totalMarks += 0;
                  break;
              case 'sometimes':
                  totalMarks += 1;
                  break;
              case 'often':
                  totalMarks += 3;
                  break;
              case 'always':
                  totalMarks += 4;
                  break;
          }
      }
  }

  // Display the total marks
        var totalMarksElement = document.getElementById("totalMarks");
        totalMarksElement.innerText = "Total Marks: " + totalMarks;
        totalMarksElement.style.display = "block";
    }


function calculateTotal() {
    var totalMarks = 0;

    // Iterate through each question
    for (var i = 1; i <= 7; i++) {
        var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');

        if (selectedOption) {
            // Assign marks based on selected option
            switch (selectedOption.value) {
                case 'rarely':
                    totalMarks += 0;
                    break;
                case 'sometimes':
                    totalMarks += 1;
                    break;
                case 'often':
                    totalMarks += 3;
                    break;
                case 'always':
                    totalMarks += 4;
                    break;
            }
        }
    }

    // Determine stress level based on total marks
    var stressLevel = '';
    if (totalMarks >= 0 && totalMarks <= 14) {
        stressLevel = 'Normal';
    } else if (totalMarks >= 15 && totalMarks <= 18) {
        stressLevel = 'Mild Stress';
    } else if (totalMarks >= 19 && totalMarks <= 25) {
        stressLevel = 'Moderate Stress';
    } else {
        stressLevel = 'Severe Stress';
    }

    // Display the total marks and stress level
    var totalMarksElement = document.getElementById("totalMarks");
    totalMarksElement.innerText = "Total Marks: " + totalMarks + ", Stress Level: " + stressLevel;
    totalMarksElement.style.display = "block";

    // Get individual responses and send data to Firebase
    saveMessages(
        getElementVal('1'),
        getElementVal('2'),
        getElementVal('3'),
        getElementVal('4'),
        getElementVal('5'),
        getElementVal('6'),
        getElementVal('7'),
        totalMarks,
        stressLevel
    );
}

  
  
  
  
  