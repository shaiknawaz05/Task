import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup  from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import "../src/task.css";
import FormGroup from '@material-ui/core/FormGroup';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('BCC');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
       <form >
         <div class="box">
         <h2>Add Coupon Code</h2>
         </div>
         <FormControl component="fieldset">
      <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="SCC" class="box1" control={<Radio />} label="Single Coupon Code" />
        <FormControlLabel value="BCC" class="box1" control={<Radio />} label="Bulk Coupon Code" />
      </RadioGroup >
    </FormControl>
         <p>Enter Name</p>
         <input type="text" placeholder="Input text" />
         <p>Enter Coupon Code</p>
         <input type="text" placeholder="Input text" />
         <p>Type of Discount</p>
         <label>
           <input type="radio"/>Percentage discount
         </label>
         <input type="text" placeholder="Enter Discount"/>
         <br/><br/>
         <label>
           <input type="radio"/>Fixed amount Discount
         </label><br/><br/>
         <FormGroup >
         <FormControlLabel
        control={
          <Checkbox
            name="1"
            color="primary"
          />
        }
        label="Limit the number of times the code can be redeemed"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="2"
            color="primary"
          />
        }
        label="Add any expiry date"
      />
        <FormControlLabel
        control={
          <Checkbox
            
            name="3"
            color="primary"
          />
        }
        label="Limit to specific courses"
      />

         </FormGroup>
      </form>
  );
}



