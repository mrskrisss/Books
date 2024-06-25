import React from 'react'
import { ITitle } from '../../types/ITitle'
import './index.scss'

export const Title: React.FC<ITitle> = ({ children }) => {
  return <h1 className="title">{children}</h1>
}
