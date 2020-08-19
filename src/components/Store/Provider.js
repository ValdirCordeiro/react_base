import React from 'react';
import Context from './Context';
import useStorage from '../../utils/useStorage';

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');
  const [usuario, setUsuario] = useStorage('usuario');

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        usuario,
        setUsuario
      }}
    >
      {children}
    </Context.Provider>
  )
}


export default StoreProvider;
