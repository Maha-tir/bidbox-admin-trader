import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MasterPairForm = () => {
  return <i className="bx bx-plus"></i>;
};

const FormAction = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname == "/admin/master-pair-form"
        ? MasterPairForm()
        : "Hello World"}
    </div>
  );
};

export default FormAction;
