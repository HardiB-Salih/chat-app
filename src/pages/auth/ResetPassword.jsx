import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";
import { Link as RouterLink } from "react-router-dom";
import { CaretLeft } from "phosphor-react";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={3} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4" paragraph>
          Forgot your password?
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please enter your email address associated with your Account and we
          will send you an email.
        </Typography>

        {/* Reset Password Form */}
        <ResetPasswordForm />

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
      </Stack>
    </>
  );
};

export default ResetPassword;
