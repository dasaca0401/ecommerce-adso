import NextLink from 'next/link'
import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material'
import { AuthLayout } from "../../components/layouts"
import React from 'react'

const LoginPage = () => {
  return (
    <AuthLayout title={"Login"}>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1'>Iniciar Sesión</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Correo' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Contraseña' type='password' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button color='secondary' className='circular-btn' size='large' fullWidth>
              INGRESAR
            </Button>
          </Grid>
          <Grid item xs={12} display='flex' justifyContent='center'>
            <NextLink href='/auth/register' passHref legacyBehavior>
              <Link underline='always'>
              ¿No tienes cuenta?
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage