import styles from './Navbar.module.css'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ToolBar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='primary'>
            <ToolBar>
                <Typography variant='h6' component="div" sx={{flexGrow:1}}>
                    <Link component="button" to="/" className={styles.link}> HARCAMA TAKİP UYGULAMASI</Link>
                </Typography>
                <Button variant='outlined' color='inherit'>
                    <Link component="button" className={styles.link} to="/login" >GiRİŞ</Link>
                </Button>
                <Button variant='text' color='secondary'>
                    <Link component="button" className={styles.link} to="/signup" >ÜYE OL</Link>
                </Button>
            </ToolBar>
        </AppBar>
    </Box>
  )
}
