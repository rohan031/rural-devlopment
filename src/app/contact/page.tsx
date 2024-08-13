"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Container from "@/components/Container/Container";
import Image from "next/image";
import { address, email, phone } from "@/data/navigation";
const data = {
    heading: "CONTACTEZ-NOUS",
};

const Contact = () => {
    const [name, setName] = useState("");
    const [emailId, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
    };

    return (
        <>
            <div className={styles.iframe}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.561027560374!2d15.299146400000001!3d-4.30507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33ad477ec485%3A0xeba82966c64fe33!2sProjet%20de%20Renforcement%20des%20Infrastructures%20Socio-Economiques%20dans%20la%20zone%20Centre%20de%20la%20RDC!5e0!3m2!1sen!2sin!4v1721113994812!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    loading="lazy"
                    width="0"
                    height="0"
                ></iframe>
            </div>

            <Container className={styles.content}>
                <h1>{data.heading}</h1>

                <div className={styles.details}>
                    <div className={styles.image}>
                        <Image
                            src="/home/blogs/blog6.webp"
                            width={415}
                            height={400}
                            alt="contact"
                        />
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.address}>
                            <h3>Adresse physique</h3>

                            <p>{address}</p>
                        </div>

                        <div className={styles.phone}>
                            <h3>Téléphone</h3>

                            <div className={styles.info}>
                                {phone.map((item) => {
                                    return (
                                        <div key={item}>
                                            <a
                                                data-type="link"
                                                href={`tel:${item}`}
                                            >
                                                {item}
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className={styles.email}>
                            <h3>Adresse e-mail</h3>

                            <div className={styles.info}>
                                {email.map((item) => {
                                    return (
                                        <div key={item}>
                                            <a
                                                data-type="link"
                                                href={`mailto:${item}`}
                                            >
                                                {item}
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.input}>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={styles.input}>
                            <input
                                type="text"
                                placeholder="Phone"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div className={styles.input}>
                            <input
                                type="text"
                                placeholder="Email"
                                value={emailId}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.input}>
                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <div className={styles.action}>
                            <button data-type="button" data-variant="primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default Contact;
