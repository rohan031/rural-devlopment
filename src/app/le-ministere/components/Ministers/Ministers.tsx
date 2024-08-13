import React from "react";
import styles from "./ministers.module.scss";
import Image from "next/image";

const data = [
	{
		name: "Félix-Antoine Tshisekedi Tshilombo",
		image: "/le-ministry/felix.png",
		content: [
			"Born on June 13, 1963 in Kinshasa, Félix-Antoine Tshisekedi Tshilombo is a statesman from the Democratic Republic of Congo (DRC). He was sworn President of the Republic on 24 January 2019.",
			"Prior to being elected President of the DRC in its first ever peaceful hand over of power, he was a top executive of the UDPS (Union for Social Democracy and Social Progress), a party led by his late father, Etienne Tshisekedi, who passed away in February 2017.",
			"In 2011, he was elected as Member of the National Assembly representing the constituency of Kananga in the Kasai Occidental province.",
			"Having refused to sit in the National Assembly in protest of the electoral fraud, he was later on deprived of his parliamentary mandate in 2013.",
			"Following the death of his father, he was elected national president of the UDPS at an extraordinary party Congress in March 2018. In the same month, he was chosen by his fellow opposition leaders to lead the “Rassemblement”, on broad opposition electoral platform for the presidential election.",
			"He is one of the initiators of the Congolese Dialogue for the respect of the Constitution and for the peaceful transition of power in the DRC. A process he defended tirelessly, and which led him to form an alliance with Vital Kamerhe of the Union for the Congolese Nation (UCN) in a political agreement signed in Nairobi on 23 November 2018, forming the platform” CACH” (Cap for Change) for the December 2018 elections.",
			"On 30 December 2018, he was elected President of the Republic for a five-year term. At 56, he became the 5th President of the Democratic Republic of the Congo in the first ever peaceful transfer of power in the largest country in Central Africa.",
		],
	},
	{
		name: "Muhindo Nzangi Butondo",
		image: "/le-ministry/muhindo.png",
		content: [
			"Muhindo Nzangi est né le 11 novembre 1980 à Kyavinyonge dans le territoire de Beni, sur le rivage du lac Édouard1,2.",
			"En 2006, Muhindo Nzangi est élu député provincial de la circonscription du territoire de Lubero dans la province du Nord Kivu.",
			"Il est élu député national lors des élections de 2011 pour la circonscription de Butembo-ville. et réélu lors des élections de 2018 et rejoint le groupe MS-G7 d'Ensemble pour la République1.",
			"En avril 2021, Muhindo Nzangi est nommé ministre de l'Enseignement supérieur et universitaire dans les gouvernements Lukonde I et II.",
			"En janvier 2024, après publication des résultats provisoires des élections législatives du 20 décembre 2023, il est réélu député national de la ville de Goma.",
			"En 29 mai 2024, il est nommé ministre d'État ministre du Développement rural.",
		],
	},
];

const Ministers = () => {
	return (
		<div className={styles.container}>
			{data.map((item) => {
				return (
					<div className={styles.item} key={item.name}>
						<div className={styles.image}>
							<Image
								src={item.image}
								width={430}
								height={550}
								alt={item.name}
							/>
						</div>
						<h2>{item.name}</h2>
						{item.content.map((info) => {
							return <p key={info}>{info}</p>;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Ministers;
