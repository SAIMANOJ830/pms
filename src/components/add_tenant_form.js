// src/components/AddTenantForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function AddTenantForm() {
  const [tenantName, setTenantName] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [leaseExpiry, setLeaseExpiry] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTenant = { name: tenantName, email: tenantEmail, leaseExpiry };

    try {
      // Post to your API or manage state here
      await axios.post('https://yourapi.com/tenants', newTenant);
      alert('Tenant Added');
      history.push('/tenants');
    } catch (error) {
      console.error('Error adding tenant', error);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Add New Tenant</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Tenant Name"
          fullWidth
          value={tenantName}
          onChange={(e) => setTenantName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Tenant Email"
          fullWidth
          value={tenantEmail}
          onChange={(e) => setTenantEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Lease Expiry"
          fullWidth
          value={leaseExpiry}
          onChange={(e) => setLeaseExpiry(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Tenant
        </Button>
      </form>
    </Container>
  );
}

export default AddTenantForm;
