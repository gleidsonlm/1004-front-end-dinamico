export function sectionNewsletter() {

    // Create section element
    const section = document.createElement('section');
    section.id = 'sectionNewsletter';
    section.classList.add('newsletter', 'flex', 'flex-column', 'align-items-center', 'card', 'p-2', 'm-2');

    // Create form element
    const form = document.createElement('form');

    // Create name input field
    const nameFormGroup = document.createElement('div');
    nameFormGroup.classList.add('form-group','needs-validation');

    const nameLabel = document.createElement('label');
    nameLabel.classList.add('visually-hidden');
    nameLabel.setAttribute('for', 'nameInput');
    nameLabel.textContent = 'Name';

    const nameInput = document.createElement('input');
    nameInput.classList.add('form-control');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'nameInput');
    nameInput.setAttribute('placeholder', 'Qual o seu nome?');
    nameInput.setAttribute('required', '');
    nameInput.addEventListener('input', (event) => {
        const target = event.target;
        
        if (event.target.value.length > 0) {
            target.classList.remove('is-invalid')
            target.classList.add('is-valid')
        } else {
            target.classList.add('is-invalid')
            event.preventDefault();
            event.stopPropagation();
        }
    });

    const nameInputTooltip = document.createElement('div');
    nameInputTooltip.classList.add('invalid-feedback');
    nameInputTooltip.textContent = 'Insira um nome válido';

    nameFormGroup.appendChild(nameLabel);
    nameFormGroup.appendChild(nameInput);
    nameFormGroup.appendChild(nameInputTooltip);

    // Create email input field
    const emailFormGroup = document.createElement('div');
    emailFormGroup.classList.add('form-group');

    const emailLabel = document.createElement('label');
    emailLabel.classList.add('visually-hidden');
    emailLabel.setAttribute('for', 'emailInput');
    emailLabel.textContent = 'Email address';

    const emailInput = document.createElement('input');
    emailInput.classList.add('form-control');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'emailInput');
    emailInput.setAttribute('required', '');
    emailInput.setAttribute('placeholder', 'Qual o seu e-mail?');
    emailInput.addEventListener('input', (event) => {
        const target = event.target;
        // regex from https://emailregex.com/
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (emailRegex.test(event.target.value)) {
            target.classList.remove('is-invalid')
            target.classList.add('is-valid')
        } else {
            target.classList.add('is-invalid')
            event.preventDefault();
            event.stopPropagation();
        }
    });

    const emailInputTooltip = document.createElement('div');
    emailInputTooltip.classList.add('invalid-feedback');
    emailInputTooltip.textContent = 'Insira um e-mail válido';

    emailFormGroup.appendChild(emailLabel);
    emailFormGroup.appendChild(emailInput);
    emailFormGroup.appendChild(emailInputTooltip);

    // Create postal code input field
    const postalCodeFormGroup = document.createElement('div');
    postalCodeFormGroup.classList.add('form-group');

    const postalCodeLabel = document.createElement('label');
    postalCodeLabel.classList.add('visually-hidden');
    postalCodeLabel.setAttribute('for', 'postalCodeInput');
    postalCodeLabel.textContent = 'CEP - Código de Endereçamento Postal';


    const postalCodeInput = document.createElement('input');
    postalCodeInput.classList.add('form-control');
    postalCodeInput.setAttribute('type', 'number');
    postalCodeInput.setAttribute('id', 'postalCodeInput');
    postalCodeInput.setAttribute('maxlength', '8');
    postalCodeInput.setAttribute('step', '1');
    postalCodeInput.setAttribute('required', '');
    postalCodeInput.setAttribute('placeholder', 'Qual o seu CEP?');
    postalCodeInput.addEventListener('input', (event) => {
        const target = event.target;
        // regex for exact 8 numbers, hifen optional
        const cepRegex = /^[0-9]{8}$/;

        if (cepRegex.test(event.target.value)) {
            target.classList.remove('is-invalid')
            target.classList.add('is-valid')
        } else {
            target.classList.add('is-invalid')
            event.preventDefault();
            event.stopPropagation();
        }
    });

    const postalCodeInputTooltip = document.createElement('div');
    postalCodeInputTooltip.classList.add('invalid-feedback');
    postalCodeInputTooltip.textContent = 'Insira um CEP válido com 8 números, sem o hífen';


    postalCodeFormGroup.appendChild(postalCodeLabel);
    postalCodeFormGroup.appendChild(postalCodeInput);
    postalCodeFormGroup.appendChild(postalCodeInputTooltip);

    // Create newsletter checkbox
    const newsletterFormGroup = document.createElement('div');
    newsletterFormGroup.classList.add('form-group');

    const newsletterCheckbox = document.createElement('input');
    newsletterCheckbox.classList.add('form-check-input');
    newsletterCheckbox.setAttribute('type', 'checkbox');
    newsletterCheckbox.setAttribute('id', 'newsletterCheckbox');
    newsletterCheckbox.setAttribute('required', '');
    newsletterCheckbox.setAttribute('checked', '');

    const newsletterLabel = document.createElement('label');
    newsletterLabel.classList.add('form-check-label');
    newsletterLabel.setAttribute('for', 'newsletterCheckbox');
    newsletterLabel.textContent = 'Aceito receber e-mails com promoções';

    newsletterFormGroup.appendChild(newsletterCheckbox);
    newsletterFormGroup.appendChild(newsletterLabel);

    // Create submit button
    const submitButtonFormGroup = document.createElement('div');
    submitButtonFormGroup.classList.add('form-group','container','d-flex','justify-content-center');

    const submitButton = document.createElement('button');
    submitButton.classList.add('btn', 'btn-primary');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submitButton');
    submitButton.textContent = 'Começar a Calculadora de Churrasco';

    submitButtonFormGroup.appendChild(submitButton);

    // Add form elements to form
    form.appendChild(nameFormGroup);
    form.appendChild(emailFormGroup);
    form.appendChild(postalCodeFormGroup);
    form.appendChild(newsletterFormGroup);
    form.appendChild(submitButtonFormGroup);

    // Check if form data is saved in local storage
    const formData = JSON.parse(localStorage.getItem('churrascometroFormData'));
    if (formData) {
        nameInput.value = formData.name;
        emailInput.value = formData.email;
        postalCodeInput.value = formData.postalCode;
        newsletterCheckbox.checked = formData.newsletter;
    }
 
    form.addEventListener('submit', (event) => {
        // prevent page reload
        event.preventDefault();
        event.stopPropagation();
        // check if form is valid
        if (form.checkValidity()) {
            // get values from form
            const name = nameInput.value;
            const email = emailInput.value;
            const postalCode = postalCodeInput.value;
            const newsletter = newsletterCheckbox.checked;

            // create custom event
            const newsletterEvent = new CustomEvent('newsletterSubscribed', {
                detail: {
                    name,
                    email,
                    postalCode,
                    newsletter
                }
            });

            // dispatch event
            form.dispatchEvent(newsletterEvent);
        } else {
            // add bootstrap class to show invalid feedback
            form.classList.add('was-validated');
        }

        // save form data to local storage
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            postalCode: postalCodeInput.value,
            newsletter: newsletterCheckbox.checked,
        };
        localStorage.setItem('churrascometroFormData', JSON.stringify(formData));

        document.querySelector('#sectionOptions').classList.remove('d-none');
        document.querySelector('#sectionCalculator').classList.remove('d-none');
        document.querySelector('#sectionCalculatorButton').classList.remove('d-none');

        // hide sectionNewsletter
        document.querySelector('#sectionNewsletter').classList.add('d-none');
    });

    // Add form to section
    section.appendChild(form);

    return section;
}