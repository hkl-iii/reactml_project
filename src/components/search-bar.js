import React, { useState } from "react";
import {
	Label,
	Input,
	Row,
	Col,
} from "reactstrap";

const SearchBar = (props) => {

	const [text, setText] = useState(props.value);

	const handleChange = (e) => {
		props.onChange(e.target.value);
		setText(e.target.value)
	}

	return (
		<React.Fragment>
			<Row>
				<Col lg={3}>
					<Label for="search">Search</Label>
				</Col>
				<Col lg={9}>
					<Input
						type="text"
						name="search"
						id="search"
						placeholder="Search ... "
						value={text}
						onChange={handleChange}
					/>
				</Col>
			</Row>
		</React.Fragment>
	);
};

export default SearchBar;
