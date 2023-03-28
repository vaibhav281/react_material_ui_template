import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const styles = {
  box: {
    position: 'absolute',
    top: '12%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Loader() {
  return (
    <Box sx={{ display: 'flex', ...styles.box }}>
      <CircularProgress />
    </Box>
  );
}