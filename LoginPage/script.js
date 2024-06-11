// Select the necessary containers
const pageContainer = document.querySelector('.page-container');
const formContainer = document.querySelector('.form-container');
const formSubmission = document.querySelector('.form-submission'); // This is already a form element

// Create and configure the heading
const heading = document.createElement('div');
heading.classList.add('heading');
const head = document.createElement('h1');
head.textContent = "Login";
heading.appendChild(head);

// Create the fields container
const fields = document.createElement('div');
fields.classList.add('fields');

// Function to create a field with an icon, input, and specified attributes
function fieldfunc(inputLogo, inputType, inputPlaceholder, inputName, inputPattern) {
    const fieldcontainer = document.createElement('div');
    fieldcontainer.classList.add('fieldcontainer');

    const field = document.createElement('div');
    field.classList.add('field');

    const Input = document.createElement('input');
    Input.classList.add('inp');
    Input.setAttribute('type', inputType);
    Input.setAttribute('placeholder', inputPlaceholder);
    Input.setAttribute('name', inputName);
    Input.setAttribute('pattern', inputPattern);
    Input.required = true; // Make the field required

    const Icons = document.createElement('img');
    Icons.src = inputLogo;

    field.appendChild(Icons);
    field.appendChild(Input);
    fieldcontainer.appendChild(field);

    return fieldcontainer;
}

// Create and append email and password fields
const field1 = fieldfunc("./images/icons8-email-24.png", "email", "Your Email", "email", "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
fields.appendChild(field1);

const field2 = fieldfunc("./images/icons8-password-24.png", "password", "Your Password", "password", "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
fields.appendChild(field2);

// Create the login section with register link and login button
const logSection = document.createElement('div');
logSection.classList.add('logsection');

// Create and configure the register link
const registerLink = document.createElement('a');
registerLink.innerText = "CLICK TO REGISTER";
registerLink.href = "../reg.html";

// Create and configure the login button
const loginBtn = document.createElement('button');
loginBtn.classList.add("btn");

// Append the login button to a link element
const loginLinkContainer = document.createElement('a');
loginLinkContainer.innerText="Login";
loginLinkContainer.href = "../main.html";
loginBtn.appendChild(loginLinkContainer);
loginLinkContainer.classList.add("btntag");

// Append the register link and login button to the log section
logSection.appendChild(registerLink);
logSection.appendChild(loginBtn);

// Append all created elements to the formSubmission (which is assumed to be a form element)
formSubmission.appendChild(heading);
formSubmission.appendChild(fields);
formSubmission.appendChild(logSection);

// Append the formSubmission to formContainer
formContainer.appendChild(formSubmission);

// Finally, append the formContainer to pageContainer
pageContainer.appendChild(formContainer);
