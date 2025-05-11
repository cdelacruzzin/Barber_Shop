import React, { useState} from "react";
import { link as RouterLink} from "react-router-dom";
import { Box } from "@mui/system";
import { Tabs, Tab, Link as MuiLink } from '@mui/material';


const Navbar = () => {
    return (
        <header>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
            }}>


                {/*<MuiLink*/}
                {/*    component={RouterLink}*/}
                {/*    to='/'*/}
                {/*    underline='none'*/}
                {/*    onClick={resetCategory}*/}
                {/*>*/}
                {/*    <span className="logo"></span>*/}
                {/*    URBAN SK8*/}
                {/*</MuiLink>*/}


                {/*<Tabs centered value={value} onChange={(e, newValue) => setValue(newValue)}>*/}
                {/*    <Tab label="page One" />*/}
                {/*    <Tab label="page Two" />*/}
                {/*    <Tab label="page Three" />*/}
                {/*</Tabs>*/}
                <Tabs centered>
                    <Tab label="page One" />
                    <Tab label="page Two" />
                    <Tab label="page Three" />
                </Tabs>

                {/*<button onClick={Auth.logout}>logout</button>*/}
                <button>logout</button>


                <button>
                    <a href='/login' className='button-style'>login</a>

                </button>


                <div>
                    profile
                </div>

            </Box>
        </header >
    )
}
export default Navbar;