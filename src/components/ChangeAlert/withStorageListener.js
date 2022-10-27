import React from 'react';

function withStorageListener(WrappedComponent) {//High Order Component
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'todoList') {
        console.log('Hubo cambios en Todos list');
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  }
}

export { withStorageListener };