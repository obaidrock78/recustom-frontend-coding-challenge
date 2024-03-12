import { expect, test, vitest } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Toast } from '../stories/Toast'

test('Toast renders with message', () => {
  render(<Toast message='test message' />)
  expect(screen.getByText('test message')).toBeDefined()
})

test('Toast closes after a certain time', () => {
  vitest.useFakeTimers()
  render(<Toast message='test message' />)
  
  // Simulate time passing
  vitest.advanceTimersByTime(5000) // Assuming toast closes after 5 seconds
  
  const toastElement = screen.queryByRole('alert')
  expect(toastElement).toBeNull()
})