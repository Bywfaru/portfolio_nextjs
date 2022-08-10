import { useState, useEffect } from "react";

const NameLogo = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(!isVisible);
        }, 500);

        return () => clearTimeout(timeout);
    }, [isVisible]);

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
                {
                    ".st1{font-family:'FiraCode-SemiBold'}.st2{font-size:112.088px}"
                }
            </style>
            <path d="M-.4 94.1h196v126.3H-.4z" />
            <text transform="translate(59.325 186.315)">
                <tspan
                    x={0}
                    y={0}
                    className="st1 st2"
                    style={{
                        fill: "#fff",
                    }}
                >
                    {"He"}
                </tspan>
                <tspan id="dash" x={138} y={0} className="st1 st2">
                    {isVisible && "_"}
                </tspan>
            </text>
            <text
                transform="matrix(1.0149 0 0 1 -4.918 91.468)"
                className="st1"
                style={{
                    fontSize: "112.0846px",
                }}
            >
                {":William"}
            </text>
        </svg>
    );
};

export default NameLogo;
