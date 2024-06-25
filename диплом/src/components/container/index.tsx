import React from 'react'
import { IContainer } from '../../types/IContainer'
import './index.scss'

export const Container: React.FC<IContainer> = ({ children }) => {
  return <div className="container">{children}</div>
}
