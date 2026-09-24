document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    if (!form) {
        return;
    }

    const sendButton = document.getElementById('send_btn');
    const errorElement = document.getElementById('err');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        errorElement.textContent = '';

        // Honeypot
        const honeypot = form.querySelector('[name="website"]');

        if (honeypot && honeypot.value.trim() !== '') {
            return;
        }

        // Get Turnstile token
        const turnstileToken = form.querySelector(
            '[name="cf-turnstile-response"]'
        )?.value;

        if (!turnstileToken) {
            errorElement.textContent =
                'Please complete the security check.';
            return;
        }

        const name = document.getElementById('ur_name').value.trim();
        const email = document.getElementById('ur_mail').value.trim();
        const whatsapp = document.getElementById('ur_phone')?.value.trim() || '';
        const message = document.getElementById('msg').value.trim();

        // Client-side validation
        if (!name || !email || !message) {
            errorElement.textContent =
                'Please fill in all required fields.';
            return;
        }

        if (name.length > 100) {
            errorElement.textContent =
                'Name is too long.';
            return;
        }

        if (email.length > 150) {
            errorElement.textContent =
                'Email is too long.';
            return;
        }

        if (whatsapp.length > 50) {
            errorElement.textContent =
                'WhatsApp number is too long.';
            return;
        }

        if (message.length > 3000) {
            errorElement.textContent =
                'Message is too long.';
            return;
        }

        // Disable button
        sendButton.disabled = true;
        sendButton.textContent = 'Sending...';

        const data = {
            name: name,
            email: email,
            whatsapp: whatsapp,
            message: message,
            website: honeypot ? honeypot.value.trim() : '',
            turnstileToken: turnstileToken
        };

        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbxwv69qeggSHm2rNztBlbgLMgVPu_mt4aNpNaoKfrY6ZMPwJVcJ2JcDdwu0VQ-T7fVuYA/exec',
                {
                    method: 'POST',
                    body: JSON.stringify(data)
                }
            );

            const result = await response.json();

            if (result.success) {
                form.reset();

                if (window.turnstile) {
                    window.turnstile.reset();
                }

                const notificationModal = document.getElementById('notification-modal');
                notificationModal.style.display = 'block';

            } else {
                errorElement.textContent =
                    'Failed to send the message.';
            }

        } catch (error) {
            console.error(error);

            errorElement.textContent =
                'An error occurred. Please try again.';
        }

        sendButton.disabled = false;
        sendButton.textContent = 'contact me';
    });
});