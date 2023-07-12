import React from 'react';
import { Grid, Paper } from '@mui/material';
import { AiFillFile } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { BiAlarmAdd } from 'react-icons/bi';
import { FaRupeeSign } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, textAlign: 'center', color: '#0084ff' }}>NAME</Paper>
      </Grid>
      <Grid item xs={6} md={4}>

        <div className="mt-5 d-flex align-items-center justify-content-evenly">
          <div className="col-lg-10 col-10">
            <h5>Import Parties</h5>
            <p>Use contacts from your Phones or Gmail to create Parties.</p>
          </div>
          <div className="col-lg-2 col-2">
            <MdKeyboardArrowRight size={35} />
            </div>
        </div>

        <div className="mt-5 d-flex align-items-start justify-content-evenly">
          <h6 className="">PARTY</h6>
          <h6 className="">AMOUNT</h6>
        </div>
        <div className="p-1 d-flex align-items-center justify-content-evenly" style={{ backgroundColor: "LightBlue" }}>
          <h6 className="mt-2">KPS SANHAULA</h6>
          <h6 className="mt-2">2,360.00</h6>
        </div>

      </Grid>
      <Grid item xs={6} md={8}>
        <div className="d-flex align-items-center justify-content-between" >
          <h5>KPS SANHAULA</h5>
          <div>
            <AiFillFile size={25} color='yellow' />
            <BsWhatsapp className="ms-2 me-2" size={22} color='green' />
            <BiAlarmAdd size={27} color='lightGray' />
          </div>
        </div>

        <div className="mt-2 d-flex align-items-center justify-content-between">
          <p>Phone : 1234567890</p>
          <p>Address : SANHAULA</p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Email : <span className="text-primary" >Add Email ID</span></p>
          <p>Gstin : <span className="text-primary" >Add GSTIN</span> </p>
        </div>

        <h6>No Credit Limit Set <span className="text-primary" > <FaRupeeSign /> Set Create Limit </span> </h6>

        <div className="mt-5 d-flex align-items-start justify-content-between">
          <h5 className="">TRANSACTIONS</h5>
          <input type="text" />
        </div>

        <table className="bp4-html-table w-100">
          <thead>
            <tr>
              <th>TYPE</th>
              <th>NUMBER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>BALANCE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="" >
              <td className="p-2">Table  Content </td>
              <td>Sale</td>
              <td>1</td>
              <td>30/06/2023</td>
              <td>2,360.00 </td>
            </tr>
            <tr style={{ backgroundColor: "LightBlue" }}>
              <td className="p-2">Table  Content </td>
              <td>Sale </td>
              <td>2</td>
              <td>30/06/2023 </td>
              <td>814.00</td>
            </tr>

          </tbody>
        </table>

      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
