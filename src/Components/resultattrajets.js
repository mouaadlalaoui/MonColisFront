import ReactDOM from 'react-dom';
import React, {useState} from 'react';

import '../resultatrecherche.css';

// Example of a data array that
// you might receive from an API
// const data = [
// { name: "Mouaad", ville_depart: "Marrakech", ville_arrive: "Paris", poids: 10, prix:50 },
// { name: "Amran", ville_depart: "Bordeaux", ville_arrive: "Lille", poids: 20, prix:100 },
// { name: "Mohamed", ville_depart: "Marseille", ville_arrive: "Nice", poids: 5, prix:25 },
// ]

function Trajet() {
return (
	<div className="Trajet">
	<table>
		<tr>
		<th>Nom</th>
		<th>Ville de départ</th>
		<th>Ville d'arrivée</th>
		<th>poids</th>
		<th>prix</th>


		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.ville_depart}</td>
			<td>{val.ville_arrive}</td>
			<td>{val.poids}</td>
			<td>{val.prix}</td>


			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Trajet;
