import React, { useEffect, useState } from "react";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Row,
	Col,
} from "reactstrap";
import axios from 'axios';


const SongForm = (props) => {
	const [title, setTitle] = useState('');
	const [artist, setArtist] = useState('');
	const [album, setAlbum] = useState('');
	const [date, setDate] = useState('');


	const handleSave = () => {
		const song = {
			'title' : title,
			'artist' : artist,
			'album' : album,
			'release_date' : date
		}
		console.log(song);
		axios.post(`http://localhost:8000/music/`, song)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
		props.onAdd(song);
	}

	return (
		<React.Fragment>
			<Form>
				<FormGroup>
					<Row>
						<Col lg={3}>
							<Label for="title">Title</Label>
						</Col>
						<Col lg={9}>
							<Input type="text" name="title" id="title" placeholder="Add Title ... " onChange={(e) => {setTitle(e.target.value)}} />
						</Col>
					</Row>
					<br />
					<Row>
						<Col lg={3}>
							<Label for="artist">Artist</Label>
						</Col>
						<Col lg={9}>
							<Input type="text" name="artist" id="artist" placeholder="Add Artist ... " onChange={(e) => {setArtist(e.target.value)}}/>
						</Col>
					</Row>
					<br />
					<Row>
						<Col lg={3}>
							<Label for="album">Album</Label>
						</Col>
						<Col lg={9}>
							<Input type="text" name="album" id="album" placeholder="Add Album ... " onChange={(e) => {setAlbum(e.target.value)}} />
						</Col>
					</Row>
					<br />
					<Row>
						<Col lg={3}>
							<Label for="date">Date</Label>
						</Col>
						<Col lg={9}>
							<Input type="date" name="date" id="date" placeholder="Add Date ... " onChange={(e) => {setDate(e.target.value)}} />
						</Col>
					</Row>
					<br />
					<Button color="primary" onClick={()=>{handleSave()}}>Add</Button>
				</FormGroup>
			</Form>
		</React.Fragment>
	);
};

export default SongForm;
