import React, { useState } from "react";
import "./Contact.css";

function Contact() {
	const [form, setForm] = useState({ name: "", email: "", message: "", phone: "" });
	const [success, setSuccess] = useState(false);

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		
		// Save message to localStorage
		try {
			const messages = JSON.parse(localStorage.getItem('adminMessages')) || [];
			const newMessage = {
				id: Date.now().toString(),
				name: form.name,
				email: form.email,
				phone: form.phone || 'Not provided',
				message: form.message,
				timestamp: new Date().toISOString(),
				isRead: false
			};
			messages.unshift(newMessage);
			localStorage.setItem('adminMessages', JSON.stringify(messages));
		} catch (err) {
			console.error('Error saving message:', err);
		}
		
		// Show success message
		setSuccess(true);
		setForm({ name: "", email: "", message: "", phone: "" });
		setTimeout(() => setSuccess(false), 3000);
	};

	return (
		<section id="contact" className="contact-section">
			<h2 className="contact-title">Contact Me</h2>
			<div className="contact-content">
				<form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={form.name}
						onChange={handleChange}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						value={form.email}
						onChange={handleChange}
						required
					/>
					<input
						type="tel"
						name="phone"
						placeholder="Your Phone (optional)"
						value={form.phone}
						onChange={handleChange}
					/>
					<textarea
						name="message"
						placeholder="Your Message"
						value={form.message}
						onChange={handleChange}
						required
						rows={5}
					/>
					<button type="submit" className="btn contact-btn">Send Message</button>
					{success && <div className="contact-success">Thank you! Your message has been sent and saved.</div>}
				</form>
				<div className="contact-info">
					<div className="contact-email">
						<a href="mailto:zeussulit@yahoo.com">zeussulit@yahoo.com</a>
					</div>
					<div className="contact-socials">
						<a href="https://github.com/Zehihi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
							<svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
						</a>
						<a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
							<svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
						</a>
						<a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
							<svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
