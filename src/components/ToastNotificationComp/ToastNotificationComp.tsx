"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastNotificationComp() {
  return <ToastContainer position="top-center" autoClose={2000} />;
}

export default ToastNotificationComp;
