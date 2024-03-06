import { forwardRef } from "react";

const Custom = forwardRef((props, ref) => {
    const { label } = props;
    return (
      <>
        <label>{label}</label>
        <input ref={ref} />
      </>
    );
  });

export default Custom