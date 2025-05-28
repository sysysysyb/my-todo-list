import { Global, css } from "@emotion/react";
import "reset-css";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #333;
        }
      `}
    />
  );
};

export default GlobalStyle;
