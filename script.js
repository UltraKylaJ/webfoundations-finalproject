//Lord Jesus, I pray that I can complete this project in a timely manner. I pray that I understand it and that what I don't understand I will receive help to understand. Please continue to give me the excitement I have been receiving from learning in this program. Thank you for all you have blessed me with and will continue to bless me with.

var textIncrease = document.getElementById("hover");
textIncrease.addEventListener("mouseenter", func, false);
textIncrease.addEventListener("mouseleave", func2, false);

function func() {  
   textIncrease.setAttribute("style", "font-size: 36px;")
}
function func2() {  
    textIncrease.setAttribute("style", "font-size: 24px;")
}


// $.ajax('https://api.adviceslip.com/advice', 
//     {
//         success: function (APIResponse) {
//             // Creating a div element
//             let myDiv = document.createElement('div');

//             // Creating a paragraph element and adding the innerHTML
//             let headerTag = document.createElement('p');
//             headerTag.innerHTML = "Advice of the Day"

//             // Creating another paragraph element and adding the innerHTML
//             let adviceTag = document.createElement('p');
//             adviceTag.innerHTML = APIResponse.participants;

//             // Appending the paragraph tags to the created div element
//             myDiv.appendChild(headerTag);
//             myDiv.appendChild(adviceTag);

//             document.body.appendChild(myDiv);
//         }
//     })
    function getAdvice() {
        $.ajax(
            'https://api.adviceslip.com/advice',
            {
                success: function (APIResponse) {
                    console.log(APIResponse);
                    let advice = JSON.parse(APIResponse);
                    console.log(advice);
                    let dailyAdvice = document.createElement('p');
                    dailyAdvice.innerHTML = advice.slip.advice;
                    document.getElementById("adviceAPI").appendChild(dailyAdvice);
                }
            }
        )
    }
    //document.getElementById("myList").appendChild(node);

// 4. A full-width panel with the following:
    // Using AJAX in JavaScript, fetch data from https://api.adviceslip.com/advice and display 
    // the Random Advice dynamically within the HTML page (https://api.adviceslip.com/)

// 5. A footer with your GitHub link