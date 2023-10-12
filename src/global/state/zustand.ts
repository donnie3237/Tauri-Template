import create from 'solid-zustand'
import { BearState } from '../../types/mainType'

export const useStore = create<BearState>(set => ({
  bears: 0,
  increase: () => set(state => ({ bears: state.bears + 1 }))
}))