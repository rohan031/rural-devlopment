import React from "react";
import style from "./page.module.scss";
import Hero from "../../components/Hero/page";
import Container from "@/components/Container/Container";
import Image from "next/image";

const data = {
    heading: "LE MINISTÈRE",
    ministry1: {
        heading: "Félix-Antoine Tshisekedi Tshilombo",
        list1: [
            "Born on June 13, 1963 in Kinshasa, Félix-Antoine Tshisekedi Tshilombo is a statesman from the Democratic Republic of Congo (DRC). He was sworn President of the Republic on 24 January 2019.",
            "Prior to being elected President of the DRC in its first ever peaceful hand over of power, he was a top executive of the UDPS (Union for Social Democracy and Social Progress), a party led by his late father, Etienne Tshisekedi, who passed away in February 2017.",
            "In 2011, he was elected as Member of the National Assembly representing the constituency of Kananga in the Kasai Occidental province.",
            "Having refused to sit in the National Assembly in protest of the electoral fraud, he was later on deprived of his parliamentary mandate in 2013.",
            "Following the death of his father, he was elected national president of the UDPS at an extraordinary party Congress in March 2018. In the same month, he was chosen by his fellow opposition leaders to lead the “Rassemblement”, on broad opposition electoral platform for the presidential election.",
            "He is one of the initiators of the Congolese Dialogue for the respect of the Constitution and for the peaceful transition of power in the DRC. A process he defended tirelessly, and which led him to form an alliance with Vital Kamerhe of the Union for the Congolese Nation (UCN) in a political agreement signed in Nairobi on 23 November 2018, forming the platform” CACH” (Cap for Change) for the December 2018 elections.",
            "On 30 December 2018, he was elected President of the Republic for a five-year term. At 56, he became the 5th President of the Democratic Republic of the Congo in the first ever peaceful transfer of power in the largest country in Central Africa.",
        ],
    },
    ministry2: {
        heading: "Muhindo Nzangi Butondo",
        list: [
            "Muhindo Nzangi est né le 11 novembre 1980 à Kyavinyonge dans le territoire de Beni, sur le rivage du lac Édouard1,2.",
            "En 2006, Muhindo Nzangi est élu député provincial de la circonscription du territoire de Lubero dans la province du Nord Kivu.",
            "Il est élu député national lors des élections de 2011 pour la circonscription de Butembo-ville. et réélu lors des élections de 2018 et rejoint le groupe MS-G7 d'Ensemble pour la République1.",
            "En avril 2021, Muhindo Nzangi est nommé ministre de l'Enseignement supérieur et universitaire dans les gouvernements Lukonde I et II.",
            "En janvier 2024, après publication des résultats provisoires des élections législatives du 20 décembre 2023, il est réélu député national de la ville de Goma.",
            "En 29 mai 2024, il est nommé ministre d'État ministre du Développement rural.",
        ],
    },
    ministry3: {
        heading: "Attributions",
        subheading:
            "Les attributions du Ministère du Développement Rural selon l’Ordonnance n° 20/017 du 27 mars 2020 fixant les attributions des Ministères ",
        list: [
            "- Elaboration et suivi des projets de développement dans les campagnes, milieux ruraux et péri urbains ; - Organisation et encadrement des paysans dans des coopératives et associations en milieu rural, en collaboration avec le Ministère ayant l’Agriculture dans ses attributions ; ",
            "- Elaboration et conduite des politiques et stratégies de développement rural ; ",
            "- Elaboration des techniques de forages manuels et mécaniques ; ",
            "- Organisation et encadrement de la population rural pour l’accroissement de la production agricole, en collaboration avec le Ministère ayant l’Agriculture dans ses attributions ; ",
            "- Aménagement et équipement de l’espace rural ; ",
            "- Coordination et intégration des programmes de développement en milieu rural ; ",
            "- Promotion du bien-être social des populations rurales par la sensibilisation et l’animation rurales ; ",
            "- Promotion et soutien de la pêche en milieu rural ; ",
            "- Aménagement, construction, réhabilitation, entretien des infrastructures socioéconomiques de base en milieu rural et péri urbain dont : ",
        ],
        sublist: [
            "Voies de desserte agricole et cours d’eau ; ",
            "Sources d’eau, adduction granitaire et forage des puits ; ",
            "Electrification rurale, en collaboration avec les Ministères ayant les Travaux Publics ainsi que l’Electricité dans leurs attributions.",
        ],
    },
    ministry4: {
        heading: "The Ministry – Le Secretariat General",
        list: [
            "Le nom de SG : PEKEYABO NZIBUKIRA Elvis",
            "Situation Géographique : 1211, croisement des avenues le Premier mall (Ex TSF) et Lt.col LUKUSA (Dans l'enceinte de l'ex la voix du Zaire) ",
        ],
    },
};

const TheMinistry = () => {
    return (
        <>
            <Hero heading={data.heading} />
            <Container className={style.ministry}>
                <div className={style.ministry1}>
                    <div className={style.list}>
                        <ul>
                            <div className={style.img}>
                                <Image
                                    src="/ministry-1.png"
                                    width={430}
                                    height={550}
                                    alt="Félix-Antoine Tshisekedi Tshilombo"
                                />
                            </div>
                            <h2>{data.ministry1.heading}</h2>

                            {data.ministry1.list1.map((item) => {
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className={style.ministry1}>
                    <div className={style.list}>
                        <ul>
                            <div className={style.img}>
                                <Image
                                    src="/ministry-2.png"
                                    width={430}
                                    height={550}
                                    alt="Félix-Antoine Tshisekedi Tshilombo"
                                />
                            </div>
                            <h2>{data.ministry2.heading}</h2>

                            {data.ministry2.list.map((item) => {
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className={style.ministry2}>
                    <h2>{data.ministry3.heading}</h2>
                    <div className={style.subheading}>
                        <p>{data.ministry3.subheading}</p>
                    </div>
                    <div className={style.list}>
                        <ul className={style.list_Item}>
                            {data.ministry3.list.map((item) => {
                                return <li key={item}>{item}</li>;
                            })}
                            <li>
                                <ul>
                                    {data.ministry3.sublist.map((item) => {
                                        return <li key={item}>{item}</li>;
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.ministry2}>
                    <h2>{data.ministry4.heading}</h2>
                    <div className={style.list}>
                        <ul className={style.list_Item}>
                            {data.ministry4.list.map((item) => {
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default TheMinistry;
