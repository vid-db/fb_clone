import styled from '@emotion/styled';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import { useTheme } from '@mui/material/styles';

import NotificationsIcon from '@mui/icons-material/Notifications';

import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",

})
const Search = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? "#333" : "white",
    padding: "0 10px",
    borderRadius: 5,
    width: "40%",
    color: theme.palette.mode === 'dark' ? "white" : "black",
    '& input': {
        color: theme.palette.mode === 'dark' ? "white" : "black",
    },
}));

const SearchIcon = styled(Box)({
    display: "none",
    alignItems: "center",
    gap: "20px",
    "@media (min-width: 600px)": {
        display: "flex", // Adjust the breakpoint as needed
    },
});

const UserBox = styled(Box)({
    display: "flex", // This should be a string
    alignItems: "center",
    gap: "10px",
    "@media (min-width: 600px)": {
        display: "none", // Adjust the breakpoint as needed
    },
});

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky' >
            <StyledToolBar>

                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>FaceBook</Typography>
                <FacebookIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search ><InputBase placeholder='Search...' /></Search>
                <SearchIcon>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>

                    <Avatar sx={{ width: 30, height: 30 }} src='profile.jpg' onClick={e => setOpen(true)} />
                </SearchIcon>

                <UserBox onClick={e => setOpen(true)} >
                    <Avatar sx={{ width: 30, height: 30 }} src='profile.jpg' />
                    <Typography variant='span'>Daviid</Typography>
                </UserBox>
            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}
export default NavBar