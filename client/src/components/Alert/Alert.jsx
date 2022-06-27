import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '83%' }}>
      <Alert variant="outlined" severity="error">
        No results. Maybe wrong input. Try again.
      </Alert>
    </Stack>
  );
}
