import React, { useState } from 'react'
import {AppBar, Typography,Toolbar, Tabs,Tab} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom'

const Header = () => {
    const [value, setVAlue]= useState();
  return (
    <div>
      <AppBar  sx ={{backgroundColor:"#232F3D"}} position ='sticky'>
        <Toolbar>
        <Typography>
             <LibraryBooksIcon></LibraryBooksIcon> 
             </Typography>
        <Tabs sx={{ml:'auto'}} textColor ="inherit" indicatorColor="primary" value={value}  onChange={(e,val)=>setVAlue(val)}>
<Tab LinkComponent ={NavLink} to ="/add" label = 'add products'/>
<Tab LinkComponent ={NavLink} to ="/about" label = 'about us'/>
<Tab LinkComponent ={NavLink} to ="/books" label = 'books'/>
        </Tabs>
        </Toolbar>

      </AppBar>
    </div>
  )
}

export default Header
