// EmailJS Configuration
// Follow these steps to set up EmailJS:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key from the Integration page
// 5. Replace the placeholder values below with your actual EmailJS credentials

export const emailjsConfig = {
  // Replace with your EmailJS service ID
  serviceId: 'YOUR_SERVICE_ID',
  
  // Replace with your EmailJS template ID
  templateId: 'YOUR_TEMPLATE_ID',
  
  // Replace with your EmailJS public key
  publicKey: 'YOUR_PUBLIC_KEY'
};

// Example EmailJS template variables:
// {{name}} - User's name from the form
// {{email}} - User's email from the form
// {{message}} - User's message from the form

// Sample EmailJS template:
/*
Subject: New Contact Form Submission from {{name}}

Hello,

You have received a new message from your portfolio contact form:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
*/

export default emailjsConfig; 