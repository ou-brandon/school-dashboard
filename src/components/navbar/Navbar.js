import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navbar = props => {
	return (
		<>
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