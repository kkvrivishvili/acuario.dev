export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 345.12 76.54"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="logo-gradient-new"
            x1="3309.44"
            y1="2467.24"
            x2="3363.12"
            y2="2467.24"
            gradientTransform="matrix(-0.58153257,0,0,-0.58153257,1967.0394,1470.2688)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".03" stopColor="#5fcfcf" />
            <stop offset=".18" stopColor="#6ea5bb" />
            <stop offset=".4" stopColor="#816fa3" />
            <stop offset=".5" stopColor="#895b9a" />
            <stop offset="1" stopColor="#623886" />
          </linearGradient>
        </defs>
        
        <g transform="translate(0,-1.0120702)">
          {/* Texto "acuario" - cambia según el tema */}
          <text
            x="55.577511"
            y="60.163155"
            className="fill-foreground transition-colors duration-300"
            style={{
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '69.5712px',
              fontFamily: "'IBM Plex Mono', 'Cascadia Mono', monospace",
            }}
          >
            <tspan x="55.577511" y="60.163155">
              acuario
            </tspan>
          </text>
          
          {/* Ícono con degradado - siempre mantiene el degradado */}
          <g transform="matrix(1.3542273,-0.00652947,0.00652947,1.3542273,-15.639701,-14.168577)">
            <g>
              <path
                fill="url(#logo-gradient-new)"
                d="M 11.275605,39.285765 C 10.967393,31.772364 40.945397,31.626981 42.486458,24.183364 v 7.513401 c -1.541061,7.443616 -31.519065,7.589 -31.210853,15.102401 z"
              />
              <path
                fill="url(#logo-gradient-new)"
                d="M 11.403542,55.237204 C 11.09533,47.781956 40.82909,47.642388 42.364336,40.256924 v 7.455248 C 40.82909,55.09182 11.09533,55.237204 11.403542,62.686636 v -7.455248 z"
              />
            </g>
          </g>
        </g>
      </svg>
    )
  }