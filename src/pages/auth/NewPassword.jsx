import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Reset Password</Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please set your new password
        </Typography>

        {/* Auth Social */}
      </Stack>

      <NewPasswordForm />
      {/* New Password Form */}
      <Stack
        component={RouterLink}
        to="/auth/login"
        direction={"row"}
        alignItems="center"
        sx={{ my: 2 }}
        spacing={1}
      >
        <CaretLeft size={20} color="#363636" />
        <Link
          variant="body"
          color="text.secondary"
          underline="always"
          fontWeight={900}
        >
          Retyrn to Login
        </Link>
      </Stack>
    </>
  );
};

export default NewPassword;
