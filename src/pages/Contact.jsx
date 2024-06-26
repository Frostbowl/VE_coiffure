import React from "react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import '../assets/style/contact.css';
import LoadingModal from "../modals/LoadingModal";
import SendModal from "../modals/SendModal";


const Contact = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [prestaCoiffure, setPrestaCoiffure] = useState(false);
    const [prestaOngle, setPrestaOngle] = useState(false);
    const [prestaSkin, setPrestaSkin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showSend, setShowSend] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);

        const content = {
            to_name: 'EV Coiffure & Esthétique',
            from_name: name,
            from_email: email,
            from_phone: phone,
            presta_coiffure: prestaCoiffure ? 'Coiffure' : '',
            presta_ongle: prestaOngle ? 'Esthétique' : '',
            presta_skin: prestaSkin ? 'Bien-être' : '',
            from_message: message,
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            content, 
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        )
        .then((response) =>{
            setLoading(false);
            setShowSend(true);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setPrestaCoiffure(false);
            setPrestaOngle(false);
            setPrestaSkin(false);
        });

    }
    
    const handleCloseMessageModal = () =>{
        setShowSend(false);
    }
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
                    <form onSubmit={handleSubmit}>
                        <h2 >Formulaire de contact</h2>
                        <label For="name"></label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nom et Prénom" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required />
                        <label For="mail"></label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Courriel" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <label For="phone"></label>
                        <input  
                            type="number" 
                            name="phone" 
                            placeholder="Numéro de téléphone" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required />
                        <fieldset>
                            <legend className="text-center">Votre demande concerne: </legend>
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="prestation_coiffure" 
                                    checked={prestaCoiffure}
                                    onChange={(e) => setPrestaCoiffure(e.target.checked)}/>
                                <label For="prestation_coiffure">Coiffure</label>
                            </div>
                            <div>
                                <input 
                                    type="checkbox" 
                                    name="prestation_ongle" 
                                    checked={prestaOngle}
                                    onChange={(e) => setPrestaOngle(e.target.checked)}/>
                                <label For="prestation_ongle">Bien-être</label>
                            </div>
                            <div className="mb-4">
                                <input 
                                    type="checkbox" 
                                    name="prestation_skin" 
                                    checked={prestaSkin}
                                    onChange={(e) => setPrestaSkin(e.target.checked)}/>
                                <label For="prestation_skin">Esthétique</label>
                            </div>
                        </fieldset>
                        <label For="mesage"></label>
                        <textarea 
                            name="message" 
                            placeholder="Votre message" 
                            rows='4'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                        <div className="formBtn text-center p-4">
                            <button type="submit" className="btn" disabled={loading}>Envoyer</button>
                        </div>
                    </form>
                </article>
            </div>
            {loading && <LoadingModal/>}
            <SendModal
                show = {showSend}
                message="Email envoyé avec succès, une réponse vous sera apportée dans les plus brefs délais"
                handleClose={handleCloseMessageModal}
            />
        </section>
    )
}

export default Contact;