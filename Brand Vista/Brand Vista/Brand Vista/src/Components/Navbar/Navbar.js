import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import { Sprout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SideDrawer from '../SideDrawer/SideDrawer';

const Navbar = () =>{
    const nav = useNavigate();
    return(
        <div>
            <AppBar sx={{backgroundColor:'white'}}>
                <Toolbar>
                    <SideDrawer/>
                    <Sprout color="purple" />
                    <Typography variant='h6' sx={{"&:hover":{cursor:"pointer"}, flexGrow:1, fontFamily:"sans-serif", color:'purple',fontWeight:'bold'}}>BRAND VISTA</Typography>
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit' variant='outlined' sx={{":hover":{backgroundColor:'rgb(237, 232, 232)', color:'purple'} ,color:'white', backgroundColor:'purple'}}>About Us</Button>
                        <Button onClick={()=>{nav('Login')}} color='inherit' variant='outlined' sx={{":hover":{backgroundColor:'rgb(237, 232, 232)', color:'purple'} ,color:'white', backgroundColor:'purple'}}>Login</Button>
                        <Button onClick={()=>{nav('Gs')}} color='inherit' variant='outlined' sx={{":hover":{backgroundColor:'rgb(237, 232, 232)', color:'purple'} ,color:'white', backgroundColor:'purple'}}>Get Started</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar;