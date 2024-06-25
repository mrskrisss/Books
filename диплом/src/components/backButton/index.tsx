import Back from '../../icons/back'
import './index.scss'

export const BackButton = () => {
  const goBack = () => {
    window.history.back()
  }

  return (
    <button className="button" onClick={goBack}>
        <Back />
    </button>
  )
}
