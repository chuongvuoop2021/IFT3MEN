import React from 'react'
import Login from '../components/login'
import { useSelector } from 'react-redux'
import { AppState } from '../types'

export default function LoginPage() {
  const { currentUser } = useSelector((state: AppState) => state.user)
  if (!currentUser.name) {
    return <Login />
  }
  return (
    <>
      <p>Hello {currentUser.name}</p>
    </>
  )
}
