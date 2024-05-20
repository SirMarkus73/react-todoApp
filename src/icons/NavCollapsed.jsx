function NavCollapsed(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        d="M-1152 0H128v800h-1280z"
        style={{
          fill: 'none',
        }}
      />
      <path d="M50.008 56H14.019a5.997 5.997 0 0 1-5.995-5.995V13.994a5.998 5.998 0 0 1 5.995-5.995h35.989a5.998 5.998 0 0 1 5.995 5.995v36.011A5.997 5.997 0 0 1 50.008 56Zm-25.984-4.001V12h-9.012a2.99 2.99 0 0 0-2.989 2.989V49.01a2.99 2.99 0 0 0 2.989 2.989h9.012ZM49.015 12H28.024v39.999h20.991a2.99 2.99 0 0 0 2.989-2.989V14.989A2.99 2.99 0 0 0 49.015 12Z" />
      <path d="m16.024 38.774 6.828-6.828-6.828-6.829-2.829 2.829 4 4-4 4 2.829 2.828Z" />
    </svg>
  )
}

export { NavCollapsed }
