// EmailJS Configuration
// Follow these steps to set up EmailJS:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key from the Integration page
// 5. Replace the placeholder values below with your actual EmailJS credentials

export const emailjsConfig = {
  // Replace with your EmailJS service ID
  serviceId: 'service_lj5s1wi',
  
  // Replace with your EmailJS template ID
  templateId: 'template_176zgxd',
  
  // Replace with your EmailJS public key
  publicKey: '1NCBp5ugCb9I1ewdB'
};

// IMPORTANT: EmailJS template variables that you should use:
// {{name}} - User's name from the form
// {{email}} - User's email from the form
// {{message}} - User's message from the form
// {{to_name}} - Your name (recipient)

// CORRECT EmailJS template format:
/*
Subject: New Contact Form Submission from {{name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.

Best regards,
Portfolio Contact Form
*/

export default emailjsConfig; 