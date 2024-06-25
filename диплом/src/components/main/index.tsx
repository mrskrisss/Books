import React from 'react'
import { IMain } from '../../types/IMain'

export const Main: React.FC<IMain> = ({ children }) => {
  return <div className="main">{children}</div>
}
