import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import axios from 'axios';

const MusicTable = (props) => {

	const [data, setData] = useState(props.data);

	useEffect(() => {
		axios.get(`http://localhost:8000/music`)
		.then(res => {
			setData(res.data);
			console.log(res.data);
		});
	}, []);

	useEffect(() => {
		console.log('table',props.search)
		// axios.get(`http://localhost:8000/music/${props.search}`)
		// .then(res => {
		// 	setData(res.data);
		// 	console.log(res.data);
		// });
	},[props.search])

	const deleteItem = (idx, e) => {
		console.log(idx);
		//axios for deleting item
		// axios.delete(`http://localhost:8000/music${idx}`)
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
	}

	return (
		<React.Fragment>
			<Table hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Release Date</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, idx) => (
						<tr key={idx}>
							<th>{item.id}</th>
							<td>{item.title}</td>
							<td>{item.artist}</td>
							<td>{item.album}</td>
							<td>{item.release_date}</td>
							<td>
								<Button color="danger" onClick={(e)=>deleteItem(item.id, e)}>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</React.Fragment>
	);
};

export default MusicTable;
