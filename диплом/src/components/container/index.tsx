import React from 'react'
import './index.scss'

type Props = {
    children: React.ReactNode
 }

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>
}
