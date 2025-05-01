"use client";

import { m } from "framer-motion";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { RouterLink } from "@/templates-ui/routes/components";

import { SimpleLayout } from "@/templates-ui/layouts/simple";

import { varBounce, MotionContainer } from "@/templates-ui/components/animate";
import Image from "next/image";
import { useAuthEmailVerification } from "../../hooks/forms/use-auth-email-verification";
import { paths } from "@/utils/routes";
import { CircularProgress } from "@mui/material";

// ----------------------------------------------------------------------

export function AuthEmailVerificationView() {
  const { isLoading, isSuccess, isError } = useAuthEmailVerification({});

  const pendingGreeting = <CircularProgress />;

  const successGreeting = (
    <Typography sx={{ color: "text.secondary" }}>
      Email Successfully Verified! Thank you for validating your email!
    </Typography>
  );

  const errorGreeting = (
    <Typography sx={{ color: "text.secondary" }}>
      Sorry, we couldn’t verify your email. Perhaps you’ve mistyped the URL? Be
      sure to check your spelling or signature.
    </Typography>
  );

  const greeting = () => {
    if (isLoading) {
      return pendingGreeting;
    }
    if (isSuccess) {
      return successGreeting;
    }
    if (isError) {
      return errorGreeting;
    }
  };

  return (
    <SimpleLayout content={{ compact: true }}>
      <Container component={MotionContainer}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Email Verification
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>{greeting()}</m.div>

        <m.div variants={varBounce().in}>
          <Image
            src={`/assets/illustrations/illustration-envelope.jpg`}
            alt="illustration-envelope.jpg"
            width={300}
            height={300}
          />
        </m.div>

        <Button
          component={RouterLink}
          href={paths.backOffice.root}
          size="large"
          variant="contained"
        >
          Go to home
        </Button>
      </Container>
    </SimpleLayout>
  );
}
