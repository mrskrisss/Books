import React from 'react'
import Back from '../../icons/back'
import './index.scss'

export const BackButton: React.FC = () => {
  const goBack = () => {
    window.history.back()
  }

  return (
    <button className="button" onClick={goBack}>
        <Back />
    </button>
  )
}
