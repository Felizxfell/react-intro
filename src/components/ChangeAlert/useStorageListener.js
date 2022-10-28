import React from 'react';

function useStorageListener({ sincronize }) {//High Order Component
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener('storage', (change) => {
    if (change.key === 'todoList') {
      console.log('Hubo cambios en Todos list');
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow
  }
}

export { useStorageListener };