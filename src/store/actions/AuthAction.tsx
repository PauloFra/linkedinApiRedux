export const AuthLogin = (dispatch: any) => {
  const token = 'AQU8lkT7KXolljjD9O3BfIq8Son-9__hHN5mO13JEjBJPMv0qU1ua7p8eIgHWI05RVQX84UfDOROnrM8SMxJpFuD_pMXclSJtXvUZFGqa3rAGATHjGOpkJBPtZJgKAVCo0YV1u8w469IVT3EIRCuGSaGAnOwch0fd5t8Az1iAuuAyxKcn3V9CV8dJdWQZZLtxbcCe1vzqhuZbJPsRvMpuQBkfkR9LZwtU6OtMiFIr9Suc28vB9vEEiGh4uIQXbJgqHTzdjIO8NaPPDLJEWkA7ENtJNwXo9yNCd7KLGX5fLldWJJV53q5ZH9KaTdC41fBvBRznORWHGbBp7hW8ysgtUTscGJoTQ'
  localStorage.setItem('token', token)
  const logar = {
    type: 'SET_TOKEN',
    token: token,
    auth: true
  }
  dispatch(logar)
}

export const isAuth = (dispatch: any) => {
  const logado = {
    type: 'SET_TOKEN',
    auth: true
  }
  dispatch(logado)
}