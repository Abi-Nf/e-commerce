import { useState } from 'react';
import { Dialog } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Divider } from '@mui/material';
import { FaMoneyBill } from "react-icons/fa";

function Form() {
 const [open, setOpen] = useState(false);

 const handleOpen = () => {
    setOpen(true);
 };

 const handleClose = () => {
    setOpen(false);
 };

 return (
    <div>
      <Button className='justify-center p-6' variant="contained" color="secondary" onClick={handleOpen}>
            Buy
            <FaMoneyBill />
     </Button>
      <Dialog open={open} onClose={handleClose}>
        <div className="p-5 bg-white rounded-lg shadow-lg max-w-md">
          <form className="flex flex-col gap-5 p-5">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField label="Card Number" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Expiry Date" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField label="CVV" variant="outlined" />
              </Grid>
            </Grid>
            <Divider className="border-gray-400 my-5" />
            <Button variant="contained" color="success" onClick={handleClose}>
              Pay Now
            </Button>
          </form>
        </div>
      </Dialog>
    </div>
 );
}
export default Form;
