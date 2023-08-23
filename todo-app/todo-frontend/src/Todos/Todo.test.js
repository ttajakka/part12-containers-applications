import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Test ToDo',
    done: false
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('Test ToDo')
  expect(element).toBeDefined()
})
