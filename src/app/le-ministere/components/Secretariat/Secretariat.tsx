import React from "react";

const data = {
	heading: "The Ministry – Le Secretariat General",
	list: [
		"Le nom de SG : PEKEYABO NZIBUKIRA Elvis",
		"Situation Géographique : 1211, croisement des avenues le Premier mall (Ex TSF) et Lt.col LUKUSA (Dans l'enceinte de l'ex la voix du Zaire) ",
	],
};

const Secretariat = () => {
	return (
		<div>
			<h2>{data.heading}</h2>

			<ol>
				{data.list.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ol>
		</div>
	);
};

export default Secretariat;
