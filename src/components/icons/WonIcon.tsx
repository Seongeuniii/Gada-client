import React, { SVGProps } from 'react';

const WonIcon = ({
    height = '9px',
    width = '9px',
    color = '#9C9C9C',
    ...props
}: SVGProps<SVGSVGElement>) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height}
      viewBox="0 0 9 9" 
      fill="none"
      {...props}
    >
        <path d="M8.25 4.49996H7.1875L7.3125 3.99996H8.25C8.3163 3.99996 8.37989 3.97362 8.42678 3.92673C8.47366 3.87985 8.5 3.81626 8.5 3.74996C8.5 3.68365 8.47366 3.62006 8.42678 3.57318C8.37989 3.5263 8.3163 3.49996 8.25 3.49996H7.435L7.9775 1.30996C7.98167 1.25136 7.96507 1.19316 7.93061 1.14558C7.89615 1.098 7.84604 1.06407 7.78906 1.04975C7.73209 1.03543 7.67189 1.04164 7.61903 1.06728C7.56617 1.09291 7.52403 1.13635 7.5 1.18996L6.92 3.49996H5.3275L4.75 1.18996C4.73645 1.1359 4.70523 1.08792 4.6613 1.05364C4.61736 1.01935 4.56323 1.00073 4.5075 1.00073C4.45177 1.00073 4.39764 1.01935 4.3537 1.05364C4.30977 1.08792 4.27855 1.1359 4.265 1.18996L3.6975 3.49996H2.105L1.5325 1.18996C1.51456 1.12787 1.47327 1.07514 1.4173 1.04283C1.36133 1.01053 1.29502 1.00115 1.23228 1.01667C1.16954 1.0322 1.11526 1.07141 1.08081 1.12609C1.04636 1.18077 1.03442 1.24667 1.0475 1.30996L1.59 3.49996H0.75C0.683696 3.49996 0.620107 3.5263 0.573223 3.57318C0.526339 3.62006 0.5 3.68365 0.5 3.74996C0.5 3.81626 0.526339 3.87985 0.573223 3.92673C0.620107 3.97362 0.683696 3.99996 0.75 3.99996H1.7125L1.8375 4.49996H0.75C0.683696 4.49996 0.620107 4.5263 0.573223 4.57318C0.526339 4.62006 0.5 4.68365 0.5 4.74996C0.5 4.81626 0.526339 4.87985 0.573223 4.92673C0.620107 4.97362 0.683696 4.99996 0.75 4.99996H1.96L2.6575 7.80996C2.67105 7.86401 2.70227 7.91199 2.7462 7.94628C2.79014 7.98056 2.84427 7.99918 2.9 7.99918C2.95573 7.99918 3.00986 7.98056 3.0538 7.94628C3.09773 7.91199 3.12895 7.86401 3.1425 7.80996L3.84 4.99996H5.185L5.8825 7.80996C5.89605 7.86401 5.92727 7.91199 5.9712 7.94628C6.01514 7.98056 6.06927 7.99918 6.125 7.99918C6.18073 7.99918 6.23486 7.98056 6.2788 7.94628C6.32273 7.91199 6.35395 7.86401 6.3675 7.80996L7.0625 4.99996H8.25C8.3163 4.99996 8.37989 4.97362 8.42678 4.92673C8.47366 4.87985 8.5 4.81626 8.5 4.74996C8.5 4.68365 8.47366 4.62006 8.42678 4.57318C8.37989 4.5263 8.3163 4.49996 8.25 4.49996ZM6.795 3.99996L6.67 4.49996H5.575L5.45 3.99996H6.795ZM4.5 2.28996L4.8125 3.49996H4.2125L4.5 2.28996ZM2.2275 3.99996H3.5725L3.4475 4.49996H2.3525L2.2275 3.99996ZM2.9 6.70996L2.4775 4.99996H3.325L2.9 6.70996ZM3.9625 4.49996L4.0875 3.99996H4.935L5.06 4.49996H3.9625ZM6.1225 6.70996L5.7 4.99996H6.5475L6.1225 6.70996Z" fill={color}/>
    </svg>
)

export default WonIcon;