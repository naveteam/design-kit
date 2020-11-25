import * as React from 'react'

function SvgCheckCircle(props) {
  return (
    <svg viewBox='0 0 16 16' width='1em' height='1em' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.30435 8.29165L6.75018 9.73749L10.8668 5.62499C11.0293 5.46249 11.2918 5.46249 11.4543 5.62499C11.6168 5.78749 11.6168 6.04999 11.4543 6.21249L7.04601 10.6208C6.88351 10.7833 6.62101 10.7833 6.45851 10.6208L4.71685 8.87915C4.55435 8.71665 4.55435 8.45415 4.71685 8.29165C4.87935 8.12915 5.14185 8.12915 5.30435 8.29165Z'
      />
    </svg>
  )
}

export default SvgCheckCircle
