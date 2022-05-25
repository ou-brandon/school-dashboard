import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const Navbar = props => {
	return (
		<>
			<Button component={Link} to="dashboard">
				<Typography variant="h3">TJE Dashboard</Typography>
			</Button>
			<nav>
				<Button variant="text" component={Link} to="/students">Students</Button>
				<Button variant="text" component={Link} to="/teachers">Teachers</Button>
				<Button variant="text" component={Link} to="/classes">Classes</Button>
				<Button variant="text" component={Link} to="/calendar">Calendar</Button>
			</nav>
		</>
	);
};

export default Navbar;