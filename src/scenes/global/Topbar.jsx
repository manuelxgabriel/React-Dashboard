import React from 'react'
// import {Box, IconButton, useTheme} from '@mui/material';
import {useContent} from 'react';
import { ColorModeContext, tokens } from '../../theme';
// import InputBase from '@mui/material/InputBase';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SettingsIcon from '@mui/icons-material/Settings';
// import PersonIcon from '@mui/icons-material/Person';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const Topbar = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const colorMode = useContent(ColorModeContext);


  return (
    <h1>This is a nice title</h1>
    // <Box display="flex" justifyContent="space-between" p={2}>
    //   {/* SEARCH BAR */}
      
    //   <Box 
    //     display="flex" 
    //     backgroundColor={colors.primary[400]} 
    //     borderRadius={"3px"}
    //   >

    //   <InputBase sx={{ml: 2, flex: 1}} placholder="Search"/>
    //   <IconButton type="button" sx={{p: 1}}></IconButton>
    //   </Box>
      
    //   <Box display="flex">
    //     <IconButton onClick={colorMode.toggleColorMode}>
    //       {theme.palette.mode === 'dark' ? (
    //         <DarkModeIcon/>
    //       ): (
    //         <LightModeIcon/> 
    //       )}
    //     </IconButton>
    //     <IconButton>
    //       <NotificationsIcon/>
    //     </IconButton>
    //     <IconButton>
    //       <SettingsIcon/>
    //     </IconButton>
    //     <IconButton>
    //       <PersonIcon/>
    //     </IconButton>
    //     <IconButton>
    //       <SearchOutlinedIcon/>
    //     </IconButton>
    //   </Box>


    // </Box>
  )
  

};

export default Topbar;