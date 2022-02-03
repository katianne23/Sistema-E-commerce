import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';


const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} >
            <Typography variant='h3'>
            <img src="https://img.icons8.com/ios-filled/50/000000/storytelling.png" alt="Icone-livro"/>
                ShoBook
            </Typography>
            <Link to="/" style={{paddingLeft: 13, textDecoration: 'none'}}>
                <Button color="inherit">Home</Button>
            </Link>
            <Link to="/contato" style={{paddingLeft: 13, textDecoration: 'none'}}>
                <Button color="inherit">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;