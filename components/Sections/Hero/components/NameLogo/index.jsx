import { useState, useEffect } from "react";

const FIRST_NAME = ":William";
const LAST_NAME = "He";

const NameLogo = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [firstName, setFirstName] = useState(":W");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);

      return;
    }

    const timeout = setTimeout(() => {
      setIsVisible(!isVisible);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isMounted, isVisible]);

  useEffect(() => {
    if (!isMounted || (firstName === FIRST_NAME && lastName === LAST_NAME))
      return;
    const timeout = setTimeout(() => {
      if (firstName !== FIRST_NAME) {
        setFirstName(FIRST_NAME.slice(0, firstName.length + 1));
      } else {
        setLastName(LAST_NAME.slice(0, lastName.length + 1));
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [firstName, lastName, isMounted]);

  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 551 219.9"
      style={{
        enableBackground: "new 0 0 551 219.9",
        // height: '20vw'
      }}
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {".st1{font-family:'FiraCode-SemiBold'}.st2{font-size:112.088px}"}
      </style>
      {!!lastName.length && <path d="M-.4 94.1h196v126.3H-.4z" />}
      <text transform="translate(59.325 186.315)">
        <tspan
          x={0}
          y={0}
          className="st1 st2"
          style={{
            fill: "#fff",
          }}
        >
          {lastName}
          {lastName !== LAST_NAME && firstName === FIRST_NAME && "_"}
        </tspan>
        <tspan
          id="dash"
          x={138}
          y={0}
          className="st1 st2"
        >
          {isVisible &&
            firstName === FIRST_NAME &&
            lastName === LAST_NAME &&
            "_"}
        </tspan>
      </text>
      <text
        transform="matrix(1.0149 0 0 1 -4.918 91.468)"
        className="st1"
        style={{
          fontSize: "112.0846px",
        }}
      >
        {firstName}
        {firstName !== FIRST_NAME && "_"}
      </text>
    </svg>
  );
};

export default NameLogo;
