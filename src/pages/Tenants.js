// src/pages/Tenants.js
import React, { useState, useEffect } from 'react';
import TenantList from '../components/TenantList';
import AddTenantForm from '../components/AddTenantForm';
import axios from 'axios';

export default function Tenants() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const response = await axios.get('https://yourapi.com/tenants');
        setTenants(response.data);
      } catch (error) {
        console.error('Error fetching tenants:', error);
      }
    };
    fetchTenants();
  }, []);

  return (
    <div>
      <h2>Tenants</h2>
      <AddTenantForm />
      <TenantList tenants={tenants} />
    </div>
  );
}
