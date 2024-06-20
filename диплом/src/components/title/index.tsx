import { FC, ReactNode } from 'react'
import './index.scss'

export interface TitleProps {
    children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <h1 className="title">{children}</h1>
}
