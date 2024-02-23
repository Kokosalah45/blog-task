import React, { Ref, forwardRef } from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>(
  (props, ref: Ref<HTMLButtonElement>) => {
    return (
      <button {...props} ref={ref}>
        {props.children}
      </button>
    );
  }
);

export default Button;
