import React from 'react'

const flag = {
  width: '50px',
}

interface FlagProps {
  url: string
}

const Flag = ({ url }: FlagProps): JSX.Element => {
  return <img src={url} style={flag} alt="flag" />
}

export default Flag
