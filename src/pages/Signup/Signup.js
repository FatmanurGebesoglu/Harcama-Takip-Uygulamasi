import './Signup.module.css'

import { useSignup } from '../../hooks/useSignup'
import { Container, Typography, Button, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@mui/material'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const navigate = useNavigate();

  const { signup, hata, bekliyor } = useSignup();

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
    userName: ''
  })

  //prop ile hangi form kontrol değiştiğini bulacak
  //event ile değişen veriyi bulacak
  const handleChange = (prop) => (event) => {
    setValues({
      ...values, [prop]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(values);
    signup(values.email, values.password, values.userName);
    navigate('/');
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values, showPassword: !values.showPassword
    })
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography sx={{ mt: 15, ml: 5, fontWeight: 'bold' }} variant="h4" color="darkslateblue">
          ÜYE OL
        </Typography>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput id="email" label="Email" value={values.email} onChange={handleChange('email')} />
        </FormControl>

        <FormControl fullWidth sx={{ mt: 5 }}>
          <InputLabel htmlFor="email">Parola</InputLabel>
          <OutlinedInput type={values.showPassword ? 'text' : 'password'} id="parola" label="Parola" value={values.password} onChange={handleChange('password')} endAdornment={
            <InputAdornment position='end'>
              <IconButton aria-label='Toggle password' onClick={handleClickShowPassword} edge="end">
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          } />
        </FormControl>

        <FormControl fullWidth sx={{ my: 5 }}>
          <InputLabel htmlFor="user-name">Kullanıcı ad</InputLabel>
          <OutlinedInput id="user-name" label="Kullanıcı ad" value={values.userName} onChange={handleChange('userName')} />
        </FormControl>

        {!bekliyor &&
          <Button variant='contained' type='submit' color='info' size='large' sx={{ mt: 5 }}>
            ÜYE OL
          </Button>
        }
        {bekliyor &&
          <Button disabled variant='contained' type='submit' color='info' size='large' sx={{ mt: 5 }}>
            BEKLİYOR
          </Button>
        }
        {hata && <p>{hata}</p>}

      </form>
    </Container>
  )
}
