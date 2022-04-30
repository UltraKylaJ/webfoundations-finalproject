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

function getJoke() {
    $.ajax(
        'https://api.adviceslip.com/advice',
        {
            success: function (APIResponse) {
                console.log(APIResponse);
                let advice = JSON.parse(APIResponse);
                console.log(advice);
                let dailyAdvice = document.createElement('p');
                dailyAdvice.innerHTML = advice.slip.advice;
                document.body.appendChild(dailyAdvice);
            }
        }
    )
}
getJoke()
    //document.getElementById("myList").appendChild(node);

// 4. A full-width panel with the following:
    // Using AJAX in JavaScript, fetch data from https://api.adviceslip.com/advice and display 
    // the Random Advice dynamically within the HTML page (https://api.adviceslip.com/)

// 5. A footer with your GitHub link