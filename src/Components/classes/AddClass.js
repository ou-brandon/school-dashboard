import { Typography, TextField } from "@mui/material";

const AddClass = props => {
	return (
		<>
			<Typography variant="h4">Add Class</Typography>
			<TextField id="className" label="Class Name" variant="outlined" />
			<TextField id="" />
		</>
	)
};

export default AddClass;