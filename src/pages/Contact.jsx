import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import '../assets/style/contact.css';


const Contact = () =>{

    {/*const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const content = {
            to_name: 'EV Coiffure & Esthétique',
            from_name: name,
            from_email: email,
            from_phone: phone,
            from_subject: subject,
            from_message: message,
        }
    }*/}
    return(
        <section>
            <h1 className="text-center fs-3 pt-2 pb-3">Réponse garantie sous 24 à 48 heures
            </h1>
            <div className="body-info">
                <article className="localisation">
                    <p>Nous sommes ici:</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.355691919697!2d55.5355397!3d-21.257383500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217875b29277b3e7%3A0xb0a41c24be9a11af!2sPrimal%20ink%20Tattoo!5e0!3m2!1sfr!2sfr!4v1719220545613!5m2!1sfr!2sfr" 
                    width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mb-4"></iframe>
                </article>
                <article className="contact">
                    <form>
                        <h2 >Formulaire de contact</h2>
                        <label For="name"></label>
                        <input type="text" name="name" placeholder="Nom et Prénom" required />
                        <label For="mail"></label>
                        <input type="text" name="email" placeholder="Courriel" required />
                        <label For="phone"></label>
                        <input type="number" name="phone" placeholder="Numéro de téléphone" required />
                        <fieldset>
                            <legend className="text-center">Votre demande concerne: </legend>
                            <div>
                                <input type="checkbox" name="prestation_coiffure" />
                                <label For="prestation_coiffure">Coiffure</label>
                            </div>
                            <div>
                                <input type="checkbox" name="prestation_ongle" />
                                <label For="prestation_ongle">Bien-être</label>
                            </div>
                            <div className="mb-4">
                                <input type="checkbox" name="prestation_skin" />
                                <label For="prestation_skin">Esthétique</label>
                            </div>
                        </fieldset>
                        <label For="mesage"></label>
                        <textarea name="message" placeholder="Votre message" rows='4'></textarea>
                        <div className="formBtn text-center p-4">
                            <button type="submit" className="btn">Envoyer</button>
                        </div>
                    </form>
                </article>

            </div>


        </section>
    )
}

export default Contact;