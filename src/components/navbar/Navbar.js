import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MenuItem, Typography } from '@mui/material';
import { AppBar } from '@mui/material';
const Navbar = props => {
	return (
		<>
			<AppBar color='inherit' position='static' sx={{margin: '0px', padding: '5px'}}>
				<Button variant="string" component={Link} to="/dashboard">
					<Typography variant="h3">TJE Dashboard</Typography>
				</Button>
				<nav>
					<Button variant={useLocation().pathname==='/students' ? 'contained' : 'text'} component={Link} to="/students">Students</Button>
					<Button variant={useLocation().pathname==='/teachers' ? 'contained' : 'text'} component={Link} to="/teachers">Teachers</Button>
					<Button variant={useLocation().pathname==='/classes' ? 'contained' : 'text'} component={Link} to="/classes">Classes</Button>
					<Button variant={useLocation().pathname==='/calendar' ? 'contained' : 'text'} component={Link} to="/calendar">Calendar</Button>
				</nav>
			</AppBar>
			
		</>
	);
};

export default Navbar;