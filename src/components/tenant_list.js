// src/components/TenantList.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function TenantCard({ tenant }) {
  return (
    <Card style={{ marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="h6">{tenant.name}</Typography>
        <Typography variant="body2">{tenant.email}</Typography>
        <Typography variant="body2">Lease Expiry: {tenant.leaseExpiry}</Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}

export default function TenantList({ tenants }) {
  return (
    <div>
      {tenants.map((tenant) => (
        <TenantCard key={tenant.id} tenant={tenant} />
      ))}
    </div>
  );
}
