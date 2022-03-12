import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useState } from 'react';
import { WorldBankResponse } from './gateways/interfaces/worldBank';
import { useEffect } from 'react';
import WorldBankService from './gateways/worldbankService';
import CountryTable from './components/table';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Wheater Charts
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {

  const [country, SetCountry] = useState<WorldBankResponse[]>([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await new WorldBankService().getTables()
      
      if (response.length > 0) {
        SetCountry(response)
      }
    }

    fetchMyAPI()
  }, [])


  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome here
        </Typography>
        <CountryTable dataSource={country} />
        <Copyright />
      </Box>
    </Container>
  );
}