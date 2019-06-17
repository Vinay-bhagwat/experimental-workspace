import React, { CSSProperties } from "react";
import { Spinner } from "react-bootstrap";

export const SpinnerComponent: React.SFC<any> = () => {
  return (
    <Spinner animation="border" role="status" style={style}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

const style: CSSProperties = {
  top: 0,
  position: "absolute",
  left: 0,
  right: 0,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "auto",
  bottom: 0,
};
