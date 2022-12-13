import { useReducer, useEffect } from 'react'

const useLocalStorage = (itemName, initValue) => {
  const [state, dispatch] = useReducer(reducer, initialState({ initValue }))

  const {
    sincronizedItem,
    error,
    loading,
    item
  } = state

  //ACTIONS CREATORS
  const onError = (error) => dispatch({
    type: actionTypes.ERROR, payload: error
  })

  const onSucces = (parsedItem) => dispatch({
    type: actionTypes.SUCCES, payload: parsedItem
  })

  const onSave = (item) => dispatch({
    type: actionTypes.SAVE, payload: item
  })

  const sincronizeItem = () => dispatch({
    type: actionTypes.SINCRONIZE
  })

  useEffect(() => {
    // Simulamos un segundo de delay de carga 
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try
      {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem)
        {
          localStorage.setItem(itemName, JSON.stringify(initValue));
          parsedItem = initValue;
        } else
        {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSucces(parsedItem)
      } catch (error)
      {
        // En caso de un error lo guardamos en el estado        
        onError(error)
      }
    }, 1000);
  }, [sincronizedItem, initValue, itemName]);

  const saveItem = (newItem) => {
    try
    {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      onSave(newItem)
    } catch (error) {
      onError(error)
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
    sincronizedItem
  };
}

const initialState = ({ initValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initValue
});

const actionTypes = {
  ERROR: 'ERROR',
  SUCCES: 'SUCCES',
  SAVE: 'SAVE',
  SINCRONIZE: 'SINCRONIZE'
};

const reducerObject = (state, payload) => ({
  [actionTypes.ERROR]: {
    ...state,
    error: true
  },
  [actionTypes.SUCCES]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload
  },
  [actionTypes.SAVE]: {
    ...state,
    item: payload
  },
  [actionTypes.SINCRONIZE]: {
    ...state,
    item: [],
    loading: true,
    sincronizedItem: false
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

export default useLocalStorage;