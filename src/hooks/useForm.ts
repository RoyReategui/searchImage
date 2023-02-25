import { type ChangeEvent, useState } from 'react'

export const useForm = <T>(state: T) => {
  const [formState, setFormState] = useState(state)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { target } = event
    setFormState(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const reset = (newState: T) => {
    setFormState(newState)
  }

  return { ...formState, onChange, formState, reset }
}
