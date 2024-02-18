import React from 'react'
import {Box, IconButton, useTheme} from '@mui/material';
import {useContent} from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material';
import { LightModeOutlinedIcons }  from '@mui/icons-material/LightModeOutlined';
import { DarkModeOutlined } from '@mui/icons-material/DarkModeOutlined';
import { NotificationsOutlinedIcon } from '@mui/icons-material/NotificationAddOutlined';
import { SettingsOutlinedIcon } from '@mui/icons-material/SettingsOutlined';
import { PersonOutlineOutlined } from '@mui/icons-material/PersonOutlineOutlined';
import { SearchIcon } from '@mui/icons-material/Search';



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);


  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* {SEARCH} */}
      <IconsButton></IconsButton>
    </Box>
  )
  

};

export default Topbar;