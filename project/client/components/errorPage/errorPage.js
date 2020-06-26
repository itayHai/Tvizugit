import React from "react";
import ErrorIcon from "@material-ui/icons/Error";

const ErrorPage = () => {
  return (
    <div style={{ textAlign:'center' }}>
      <ErrorIcon style={{ fontSize: 80 }} />
      <h1>אופס, משהו קרה</h1>
      <h2>נסה לרענן את הדף, זה בטח יסדר אותנו</h2>
    </div>
  );
};

export default ErrorPage;
