import { useContext } from 'react'
import { CyclesContext } from '@/contexts/cyclesContext/context'

export const useCycle = () => useContext(CyclesContext)
