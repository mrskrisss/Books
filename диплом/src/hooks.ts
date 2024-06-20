import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './redux/store'

// Используются во всем приложении вместо обычных "useDispatch" и "useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
