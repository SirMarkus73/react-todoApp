function NavExpanded(props) {
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
        d="M-1088 0H192v800h-1280z"
        style={{
          fill: 'none',
        }}
      />
      <path d="M49.984 56H13.995A5.997 5.997 0 0 1 8 50.005V13.994a5.998 5.998 0 0 1 5.995-5.995h35.989a5.998 5.998 0 0 1 5.995 5.995v36.011A5.997 5.997 0 0 1 49.984 56ZM24 51.999V12h-9.012a2.99 2.99 0 0 0-2.989 2.989V49.01a2.99 2.99 0 0 0 2.989 2.989H24ZM48.991 12H28v39.999h20.991a2.99 2.99 0 0 0 2.989-2.989V14.989A2.99 2.99 0 0 0 48.991 12Z" />
      <path d="m19.999 38.774-6.828-6.828 6.828-6.829 2.829 2.829-4 4 4 4-2.829 2.828Z" />
    </svg>
  )
}

export default NavExpanded
