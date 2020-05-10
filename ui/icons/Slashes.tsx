import * as React from 'react'
import { Box, BoxProps } from '@ui/base'

const Slashes: React.FC<BoxProps> = (props) => {
  return (
    <Box
      as="svg"
      width="9px"
      height="10px"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.386 9.352C2.32733 9.528 2.232 9.66 2.1 9.748C1.97533 9.836 1.83233 9.88 1.671 9.88C1.46567 9.88 1.286 9.814 1.132 9.682C0.978 9.55 0.901 9.38133 0.901 9.176C0.901 9.088 0.915667 9.00367 0.945 8.923L3.442 1.08C3.50067 0.904 3.59233 0.772 3.717 0.684C3.849 0.596 3.992 0.552 4.146 0.552C4.35133 0.552 4.531 0.618 4.685 0.749999C4.84633 0.881999 4.927 1.05433 4.927 1.267C4.927 1.311 4.91233 1.39167 4.883 1.509L2.386 9.352ZM5.65163 9.352C5.59296 9.528 5.49763 9.66 5.36563 9.748C5.24096 9.836 5.09796 9.88 4.93663 9.88C4.73129 9.88 4.55162 9.814 4.39763 9.682C4.24362 9.55 4.16662 9.38133 4.16662 9.176C4.16662 9.088 4.18129 9.00367 4.21062 8.923L6.70763 1.08C6.76629 0.904 6.85796 0.772 6.98263 0.684C7.11463 0.596 7.25763 0.552 7.41163 0.552C7.61696 0.552 7.79663 0.618 7.95063 0.749999C8.11196 0.881999 8.19263 1.05433 8.19263 1.267C8.19263 1.311 8.17796 1.39167 8.14863 1.509L5.65163 9.352Z"
        fill="#ADCDD0"
      />
    </Box>
  )
}

export default Slashes