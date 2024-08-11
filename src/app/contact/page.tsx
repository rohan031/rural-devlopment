import React from "react";
import style from "./page.module.scss";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";

const data = {
    heading: "CONTACTEZ-NOUS",
    add: "Avenue Lukusa, n°111-112, croisement des avenues TSF et Lukusa,dans l’enceinte du secrétariat Général au Développement Rural",
    phone1: "(+243) 817 073 112",
    phone2: "(+243) 817 073 118",
    email: "projetpriserdc@prise-rdc.com",
};

const Contact = () => {
    return (
        <div className={style.contact}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.561027560374!2d15.299146400000001!3d-4.30507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33ad477ec485%3A0xeba82966c64fe33!2sProjet%20de%20Renforcement%20des%20Infrastructures%20Socio-Economiques%20dans%20la%20zone%20Centre%20de%20la%20RDC!5e0!3m2!1sen!2sin!4v1721113994812!5m2!1sen!2sin"
                style={{ border: 0 }}
                loading="lazy"
                width="0"
                height="0"
            ></iframe>
            <Container className={style.content}>
                <h1>{data.heading}</h1>
                <div className={style.details}>
                    <div className={style.img}>
                        <Image
                            src="/home/blogs/blog6.webp"
                            width={415}
                            height={440}
                            alt="contact"
                        />
                    </div>
                    <div className={style.add}>
                        <div>
                            <h2>Adresse physique</h2>
                            <p>{data.add}</p>
                        </div>
                        <div>
                            <h2>Téléphone</h2>
                            <div>
                                <Link href={`tel:${data.phone1}`}>
                                    {data.phone1}
                                </Link>
                                <Link href={`tel:${data.phone2}`}>
                                    {data.phone2}
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h2>Adresse e-mail</h2>
                            <Link href={`mailto:${data.email}`}>
                                {data.email}
                            </Link>
                        </div>
                    </div>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Phone" />
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Message" />
                        <button>Submit</button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
