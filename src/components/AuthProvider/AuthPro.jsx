"use client"

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthPro = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
  };
  
  export default AuthPro;