import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

type NavbarProps = {
  title: string;
};

const Navbar = (props: NavbarProps) => {
  return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <AssignmentIndIcon />
                </IconButton>
                <Typography variant="h6" component={'div'} sx={{ flexGrow: 1}}>
                    Material UI
                </Typography>
                <Stack direction={'row'} spacing={2}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Components</Button>
                    <Button color="inherit">Icons</Button>
                    <Button color="inherit">Help Center</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
