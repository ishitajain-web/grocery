import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const NavBar = () => {


  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, bgcolor: 'white', color: 'white', padding: "1.5rem 4rem" }}>
      {/* <Typography variant="h6" sx={{ color: 'black' }}>GROCERY</Typography> */}
      <img src='https://bhhzy0-ie.myshopify.com/cdn/shop/files/The_Little_Green_Grocery_Logo_grey_on_green_circle_1.png?v=1731606414&width=60' />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Button variant="text" sx={{ color: "black" }} href='/'>Home</Button>
        <Button variant="text" sx={{ color: "black" }} href='/Products'>Menu</Button>
        <Button variant="text" sx={{ color: "black" }} href='/Products'>About Us</Button>
        <TextField size="small" placeholder="Search" />
        <ShoppingCartOutlinedIcon fontSize="medium" sx={{ color: 'black' }} />
        <Button variant="contained" size="small" sx={{ backgroundColor: '#238f67' }} href='/login'>login</Button>
        <Button variant="outlined" size="small" sx={{borderColor:'#238f67', color:'#238f67'}}>signup</Button>
      </Box>
    </Box>
  )
}

export default NavBar
