// pages/otp.tsx
"use client";

import { useState, useEffect } from 'react';

const OTPPage = () => {
  const [otp, setOtp] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [canRetry, setCanRetry] = useState(true);
  const [retryTimeLeft, setRetryTimeLeft] = useState(0);
  const [canResend, setCanResend] = useState(true);
  const [resendTimeLeft, setResendTimeLeft] = useState(0);

  useEffect(() => {
    let retryTimer: NodeJS.Timeout;
    if (!canRetry && retryTimeLeft > 0) {
      retryTimer = setInterval(() => {
        setRetryTimeLeft((prev) => prev - 1);
      }, 10);
    } else if (retryTimeLeft === 0) {
      setCanRetry(true);
      setAttempts(0);
    }

    return () => clearInterval(retryTimer);
  }, [canRetry, retryTimeLeft]);

  useEffect(() => {
    let resendTimer: NodeJS.Timeout;
    if (!canResend && resendTimeLeft > 0) {
      resendTimer = setInterval(() => {
        setResendTimeLeft((prev) => prev - 1);
      }, 10);
    } else if (resendTimeLeft === 0) {
      setCanResend(true);
    }

    return () => clearInterval(resendTimer);
  }, [canResend, resendTimeLeft]);

  const handleOTPSubmit = () => {
    // Mock OTP validation
    const isValid = otp === '123456';

    if (isValid) {
      alert('OTP is valid!');
    } else {
      setAttempts((prev) => prev + 1);
      if (attempts + 1 >= 3) {
        setCanRetry(false);
        setRetryTimeLeft(300); // 5 minutes in seconds
      }
      alert('Invalid OTP');
    }
    setOtp('');
  };

  const handleResendOTP = () => {
    setCanResend(false);
    setResendTimeLeft(60); // 60 seconds
    // Implement OTP resend logic here
    alert('OTP resent');
  };

  return (
    <div>
      <h1>Enter OTP</h1>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        disabled={!canRetry}
      />
      <button onClick={handleOTPSubmit} disabled={!canRetry}>
        Submit
      </button>
      {!canRetry && <p>Try again in {retryTimeLeft} seconds</p>}
      <button onClick={handleResendOTP} disabled={!canResend}>
        Resend OTP
      </button>
      {!canResend && <p>Resend available in {resendTimeLeft} seconds</p>}
    </div>
  );
};

export default OTPPage;
