import React from 'react'
import { IMain } from '../../types/IMain'
import './index.scss'

export const Main: React.FC<IMain> = ({ children }) => {
  return <div className="main">{children}</div>
}
