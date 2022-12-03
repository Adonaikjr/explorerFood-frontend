import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../service/api'
import { toast } from 'react-toastify'
export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@explorerFood:user', JSON.stringify(user))
      localStorage.setItem('@explorerFood:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        toast('Preencha todos os campos ⚠️', { theme: 'light' })
      } else {
        toast('nao foi possivel entrar')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@explorerFood:token')
    localStorage.removeItem('@explorerFood:user')

    setData({})
  }

  async function updateProfile({ user }) {
    try {
      await api.put('/users', user)
      localStorage.setItem('@explorerFood:user', JSON.stringify(user))

      setData({ user, token: data.token })
      alert('Perfil atualizado')
    } catch (error) {
      if (error.response) {
        toast('algo deu errado tente mais tarde')
      } else {
        toast('nao foi possivel atualizar perfil')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketnotes:token')
    const user = localStorage.getItem('@rocketnotes:user')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
