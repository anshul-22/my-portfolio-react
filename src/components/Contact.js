import React, { useState } from 'react';
import './styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyvFDwB6q97_KhQ1b53y-HmQFCKKj14fGD8GZDTbVhqubAfUKh_ZRPwmoXYZEWwPxhr4g/exec';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(e.target)
        })
        .then(response => {
            alert("Message sent successfully");
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Error sending message");
        });
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p>
                            <a className="links" href="mailto:anshulkumar2021@gmail.com"><i className="fa-solid fa-paper-plane"></i> anshulkumar2021@gmail.com</a>
                        </p>
                        <p>
                            <i className="fa-solid fa-square-phone"></i>
                            <a className='links' href="tel:+917870968514">+917870968514</a>
                        </p>

                        <div className="social-icons">
                            <a href="https://github.com/anshul-22" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/anshul2024/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://wa.me/+917870968514" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.instagram.com/anshulkumarprince" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form onSubmit={handleSubmit} name="submit-to-google-sheet">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                            <textarea name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                            <button type="submit" className="btn btn2">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
