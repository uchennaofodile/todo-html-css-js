//create a new node
const userEmail = document.getElementById('userEmail');


//create a new node 

const getEmail = document.getElementById('email');
//create a new node
//const button = document.getElementById('login');

//create a new node
//const header = document.getElementById('div');

//create a new node
const parent = document.getElementById('parent');

//creating the Login form
// const formForLogin = document.createElement('form');

//get the login button from the login page
const formForLogin = document.getElementById('form-for-login');


//creating the chatUi
const chatUi = document.createElement('form');

//creating the messages window
const messageWindow = document.createElement('div');

messageWindow.setAttribute('class', 'col-sm-9');

//creating send button
// const sendButton = document.createElement('button');
// sendButton.innerHTML = 'Send';

// sendButton.addEventListener('Click', () => {
//     chatUi.appendChild(sendButton);
// })


//filling th chatUi
chatUi.innerHTML += '<textarea  placeholder="Add something new" class="container rounded-4 border border-0" id="message-input"></textarea><input id="send" class="form-control" type="submit">'

//getting text area
const messageInput = chatUi.querySelector('#message-input');

//getting submit button
const sendButton = chatUi.querySelector('#send');


//initializa an array to store the messages    
const messages = [];

//Used to add todo list items to messageBoard
sendButton.addEventListener('click', (e) => {

    e.preventDefault();
    addItem();
    //     const messageText = messageInput.value;
    //     messages.push(messageText);//add to array
    //     // Log the new text to the console
    //     const newLi = document.createElement('li');
    //     newLi.textContent = messageText;
    //     //messageWindow.insertAdjacentElement('afterbegin', newLi);
    //     messageWindow.appendChild(newLi);
    //     newLi.addEventListener('click',()=>{

    //     let message = newLi.textContent;

    //     for(let i = 0; i<messages.length; i++){
    //         if(messages[i]===message){
    //             messages.splice(i,1);// remove the message from the array
    //             break;
    //         }
    //     }
    //     //removes elements that we click on
    //     if(newLi!==null){
    //         messageWindow.removeChild(newLi)
    //         console.clear(); //clear the console log
    //         messages.forEach((msg)=>{
    //         console.log(msg);
    //         })
    //     }



    // })
    // messageInput.value='';//clear the input field
})

function addItem() {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        messages.push(messageText);//add to array
        // Log the new text to the console
        const newLi = document.createElement('li');
        newLi.textContent = messageText;
        //messageWindow.insertAdjacentElement('afterbegin', newLi);
        messageWindow.appendChild(newLi);
        newLi.addEventListener('click', () => {
            let message = newLi.textContent;
            for (let i = 0; i < messages.length; i++) {
                if (messages[i] === message) {
                    messages.splice(i, 1);// remove the message from the array
                    break;
                }
            }
            //removes elements that we click on
            if (newLi !== null) {
                messageWindow.removeChild(newLi)
                console.clear(); //clear the console log
                messages.forEach((msg) => {
                    console.log(msg);
                })
            }
        })
        messageInput.value = '';//clear the input field
    }
}
//functionality for enter key
messageInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
        e.preventDefault();
        addItem();
    }
});

// Add an event listener to the message input element
// messageInput.addEventListener('input', () => {
//   // Retrieve the new text from the message input element
//   const messageText = messageInput.value;

//   // Log the new text to the console
//   const newLi = document.createElement('li');
//     newLi.textContent = messageText;
//     //messageWindow.insertAdjacentElement('afterbegin', newLi);
//     messageWindow.appendChild(newLi);
//   console.log(messageText);
// });
//getting current date
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
//populate our div
// messageWindow.innerHTML += '<div style="background-color:white" class="mt-4 p-5 col-sm-9 container rounded">Message Window<div><button class="form-control rounded">Send</button></div></div>'
messageWindow.innerHTML += '<div style="background-color:white" class="mt-4 p-5 col-sm-9 container rounded"><div class="display-3">' + formattedDate + '</div></div>'


//add some items to our list
// Create a new li element


// Insert the new li element into the messageWindow element
//messageWindow.insertAdjacentElement('afterbegin', newLi);
// for (let index = 0; index < 4; index++) {
//     const newLi = document.createElement('li');
//     newLi.textContent = 'HTML';
//     //messageWindow.insertAdjacentElement('afterbegin', newLi);
//     messageWindow.appendChild(newLi);

// }




//const registerUrl = '/register';

//filling the login form
// formForLogin.innerHTML += '<div class="container-sm-4 was-validated" id="loginForm"><form action="/login" method="POST"><label class="form-label" for="email" required>Email:</label><input class="form-control" type="text" id="email" name="email" placeholder="Email" onblur="validateEmail(this.value)" required><div class="valid-feedback"></div><br><label class="form-label" for="password" required>Password:</label><input class="form-control" type="text" id="password" name="password" placeholder="Password" required><div class="valid-feedback"></div><br><input class="form-control" id="userSubmit" type="submit" placeholder="Submit"></div></form>'


//create a new node
const divForLogin = document.getElementById('loginForm');

//create a new node 
const mainBody = document.getElementById('main-body');

//create a new node
const messageButton = document.getElementById('send');

// messageButton.addEventListener('click', ()=>{console.log('Message Sent');})


//method to add message window
const addMessageWindow = () => {
    mainBody.appendChild(messageWindow);

}


//Email validation using Regex
const emailInput = document.getElementById('email');

getEmail.addEventListener('blur', function () {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        getEmail.setCustomValidity('Please enter a valid email address.');
    } else {
        getEmail.setCustomValidity('');
    }
});


//Login function
// const replaceLoginButton = () => {
//     parent.replaceChild(formForLogin, button);
//     button.removeEventListener('click', replaceLoginButton);

// }
//getting the login header
const loginHeader = document.getElementById('login-header');

//Proceed to chat
const replaceSubmitButton = () => {
    loginHeader.textContent = '';
    parent.replaceChild(chatUi, formForLogin);
    mainBody.after(messageWindow);
    userEmail.innerHTML = getEmail.value;
    formForLogin.removeEventListener('submit', replaceSubmitButton);
}


//button.addEventListener('click', replaceLoginButton);


// messageWindow.style.width='300px';
// messageWindow.style.height='200px';
// messageWindow.style.backgroundColor = '#f2f2f2';




//const userSubmit = document.getElementById('userSubmit');

formForLogin.addEventListener('submit', replaceSubmitButton);

//messageWindow.addEventListener('click', addMessageWindow);

//userSubmit.addEventListener('click', ()=>{location.replace("./chatui.html")})

//formForLogin.addEventListener('submit', (e)=>{e.preventDefault();})
