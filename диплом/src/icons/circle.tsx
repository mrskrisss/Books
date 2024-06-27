import React from 'react'
import { ICircle } from '../types/ICircle'

const Circle: React.FC<ICircle> = ({ fill = 'currentColor' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill={fill} className="bi bi-circle-fill" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
    </svg>
  )
}

export default Circle
