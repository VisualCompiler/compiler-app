import { useContext } from 'react'
import { PlaygroundContext } from '@/Providers/PlaygroundProvider'

export const usePlayground = () => {
  const context = useContext(PlaygroundContext)
  if (!context) {
    throw new Error('usePlayground must be used within PlaygroundProvider')
  }
  return context
}
