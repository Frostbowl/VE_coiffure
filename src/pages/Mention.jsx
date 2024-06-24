import React from "react";

const Mentions =() =>{
    return(
        <article className="mention px-3">
            <h1 className="fw-bold pb-4 pt-5" style={{color:'#D63E39'}}>Mentions légales</h1>
            <h2 className="fw-bold pb-2 pt-2 text-decoration-underline">Editeur du site</h2>
            <p>Le site internet <strong>VE Coiffure et Esthétique</strong> est édité par:</p>

            <ul className="mx-4">
                <li>Nom de l'entreprise: VE Coiffure & Esthétique</li>
                <li>Adresse: 211 Chemin Chalet</li>
                <li>Responsable de la publication: Valérie Esther</li>
                <li>Téléphone: 06.92.59.11.54</li>
                <li>Email: valerie.esther29@gmail.com</li>
            </ul>

            <h2 className="fw-bold pb-2 pt-2 text-decoration-underline">Hébergement du site</h2>
            <p>Le site internet <strong>VE Coiffure & Esthétique</strong> est hébergé par:</p>

            <ul className="mx-4">
                <li>Nom de l'hébergeur: OVH</li>
                <li>Adresse de l'hébergeur: 2 rue Kellermann, 59100 Roubaix, France</li>
                <li>Téléphone de l'hébergeur: 1007</li>
            </ul>

            <h2 className="fw-bold pb-2 pt-2 text-decoration-underline">Développement du site</h2>
            <p>Le site internet <strong>VE Coiffure & Esthétique</strong> est développé par:</p>

            <ul className="mx-4">
                <li>Nom du développeur: MASCLET Clément</li>
                <li>Email du développeur: masclet.c@gmail.com</li>
            </ul>

            <h2 className="fw-bold pb-2 pt-2 text-decoration-underline">Propriété intellectuelle</h2>
            <p>L'ensemble des éléments présents sur le site (textes, images, graphismes, logo, etc.) sont la propriété exclusive 
            <br />de <strong>VE Coiffure & Esthétique</strong>, sauf mention contraire. Toute reproduction, distribution, 
                modification, adaptation,<br /> retransmission ou publication, même partielle, de ces différents éléments est
                strictement interdite sans l'accord <br />exprès par écrit de <strong>VE Coiffure & Esthétique</strong>.
            </p>

            <h2 className="fw-bold pb-2 pt-2 text-decoration-underline">Protection des données personnelles</h2>
            <p>Les informations recueillies à partir du formulaire de contact sont enregistrées et transmises aux
                services <br />concernés de <strong>VE Coiffure & Esthétique</strong>. Ces données sont utilisées pour répondre
                à vos demandes de contact. <br />Elles sont conservées pour une durée maximale de 3 ans et sont destinées exclusivement
                à <strong>VE Coiffure & Esthétique</strong>. <br />Conformément à la loi "Informatique et Libertés", vous pouvez 
                exercer votre droit d'accès aux données vous <br />concernant et les faire rectifier en contactant: 
                <strong>Valérie Esther</strong>, par téléphone au 02.62.08.61.41 ou par email <br />à valerie.esther29@gmail.com 
            </p>

            <h2 className="fw-bold pb-2 pt-2 text-decoration-underline">Cookies</h2>
            <p>Le site <strong>VE Coiffure & Esthétique</strong> n'utilise pas de cookies.</p>

            <h2 className="fw-bold pb-2 pt-2 text-decoration-underline">Limitations de responsabilité</h2>
            <p><strong>VE Coiffure & Esthétique</strong> ne pourra être tenu responsable des dommages directs et indirects
            causés au métériel de l'utilisateur,<br /> lors de l'accès au site <strong>VE Coiffure & Esthétique</strong>
            résultat soit de l'utilisation d'un matériel ne répondant pas aux spécifications <br />indiquées, soit de l'apparition d'un
            bug ou d'une incompatibilité.</p>

            <h2 className="fw-bold pb-2 pt-2 text-decoration-underline">Droit applicable</h2>
            <p>Tout litige en relation avec l'utilisation du site <strong>VE Coiffure & Esthétique</strong> est soumis au droit
            français. <br />Il est fait attribution exclusive de juridiction aux tribunaux compétents.</p>
            <p className="pb-3">Pour toute question relative aux mentions légales du site, vous pouvez nous contacter par téléphone au 06.92.40.02.32
            ou par email à masclet.c@gmail.com</p>

        </article>
    )
}

export default Mentions;