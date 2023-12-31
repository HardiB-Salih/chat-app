import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slide,
  Stack,
  styled,
  useRadioGroup,
} from "@mui/material";
import { RadioButton } from "phosphor-react";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const ThemeDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth={"sm"}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <Stack spacing={1}>
        <DialogTitle>Theme</DialogTitle>

        <DialogContent>
          <RadioGroup name="use-radio-group" defaultValue="light">
            <MyFormControlLabel
              value="light"
              label="Light"
              control={<Radio />}
            />
            <MyFormControlLabel value="dark" label="Dark" control={<Radio />} />
            <MyFormControlLabel
              value="system"
              label="System"
              control={<Radio />}
            />
          </RadioGroup>
        </DialogContent>
      </Stack>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ThemeDialog;
