import { entity } from 'simpler-state'

// initial state

const initialState = {
  authUser: {},
}

// entity

export const auth = entity(initialState)

// entity updaters

export const setAuthUser = (payload = {}) => {
  return auth.set((value) => ({
    ...value,
    authUser: payload,
  }))
}

export const resetAuthUser = () => setAuthUser()
