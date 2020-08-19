import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  setToken: () => {},
  usuario: null,
  setUsuario: () => {},
});

export default StoreContext;
