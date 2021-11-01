import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[500],
  '&:hover': {
    backgroundColor: white[700],
  },
}));

export default function CustomizedButtons() {
  return (
      <ColorButton variant="contained">Custom CSS</ColorButton>
  );
}
