import React from 'react'

const style = {
	// marginTop: "25vh",
	// marginLeft: "90vh",
	// border: "4px solid red",
	// borderRadius: "10px",
	// width: "250px",
	// height: "250px",
	// display: "grid",
	// gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
	background:'lightblue',
	border:'2px solid darkblue',
	fontSize: '30px',
	fontWeight: '800',
	cursor: 'pointer',
	outline: 'none',
};

// const props = {
//     onClick: ()=> "function",
//     value: "X"
// };

// const {value} = props;

// const Square = (props) => (
// 	<button style={style} onClick={props.onClick}>
// 		{props.value}
// 	</button>
// );

const Square = ({ value, onClick }) => (
	<button style={style} onClick={onClick}>
		{ value}
	</button>
);

export default Square
