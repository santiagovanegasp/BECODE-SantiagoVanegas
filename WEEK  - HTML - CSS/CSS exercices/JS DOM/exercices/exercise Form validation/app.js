
    

    const usernameInput= document.getElementById('username');
    const labelMessage= document.getElementById('label-message');



    function validChanges(idMsg)   {
        
        idMsg.classList.remove('msg');
        idMsg.classList.remove('error');
        idMsg.classList.add('succes');
    } 

    function errorChanges(idMsg)   {

    idMsg.classList.remove('msg');
    idMsg.classList.remove('succes');
    idMsg.classList.add('error');
    } 


    usernameInput.addEventListener('input', function (){   // username validation changes 
        const username = usernameInput.value;
        const regex = /^[a-zA-Z0-9]{5,10}$/;   // regex validation 


        if (regex.test(username)){

            labelMessage.textContent = 'Valid Username';
            validChanges(labelMessage)
        
        } else{
            labelMessage.textContent = 'ERROR, only lowercase text,  beetwen 5 and 10 characters and no special characters';
            errorChanges(labelMessage);
            // sendForm();
        }

    });

    const emailInput= document.getElementById('email');
    const labelEmailMessage= document.getElementById('labelEmailMessage');
   

    emailInput.addEventListener('input', function (){
        const email= emailInput.value ;
        const regex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

        if (regex2.test(email)){
            labelEmailMessage.textContent = 'Valid email';
            validChanges(labelEmailMessage);
        } else {
            labelEmailMessage.textContent = 'ERROR, should be a valid email adress';
            errorChanges(labelEmailMessage); 
        }
    }); 



    const passwordInput= document.getElementById('password');
    const labelPasswordMessage= document.getElementById('labelPasswordMessage');


    passwordInput.addEventListener('input', function (){

        const password= passwordInput.value; 
        const regex3 = /^.{8,15}$/ ;

        if (regex3.test(password)){
            labelPasswordMessage.textContent = 'Valid passWord';
            validChanges(labelPasswordMessage);
        
        } else {
            labelPasswordMessage.textContent = 'ERROR, at least 8 characters and at most 15 characters';
            errorChanges(labelPasswordMessage);
        }
    });


    const confirmationInput= document.getElementById('confirmation');
    const labelConfirmationdMessage= document.getElementById('labelConfirmationdMessage');
   

    confirmationInput.addEventListener('input', function (){
            const confirmation = confirmationInput.value;

            if ( passwordInput.value === confirmation){
                labelConfirmationdMessage.textContent = 'Valid confirmation';
                validChanges(labelConfirmationdMessage);
            } else {
                labelConfirmationdMessage.textContent = 'ERROR, password does not match';
                errorChanges(labelConfirmationdMessage);
            }
    });



    const formulario = document.getElementById('myform');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
    
        const username = usernameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmation = confirmationInput.value;
    
        const regex = /^[a-zA-Z0-9]{5,10}$/; // regex for username validation
        const regex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regex for email validation
        const regex3 = /^.{8,15}$/; // regex for password validation
    
        if(regex.test(username) && regex2.test(email) && regex3.test(password) && (password === confirmation)){
            formulario.submit(); // Submit the form if all validations pass
            alert('Form sent');
        }
        else {
            alert('Corrections needed');
            location.reload();  // refresh page 
        }
    });

    

    

   








