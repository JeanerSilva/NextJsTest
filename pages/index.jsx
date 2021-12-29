import React, { useReducer, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Header from "../components/header";

const initialState = { count: 2 };

const actions = {
  decrement: "decrement",
  increment: "increment",
  double: "double",
  half: "half",
  reset: "reset",
  custom: "custom",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.decrement:
      return { count: state.count - 1 };
    case actions.increment:
      return { count: state.count + 1 };
    case actions.double:
      return { count: state.count * 2 };
    case actions.half:
      return { count: state.count / 2 };
    case actions.reset:
      return { count: initialState.count };
    case actions.custom:
      return { count: action.payload };
    default:
      return state;
  }
}

export default function Reducer({ valor }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [customCount, setCustomCount] = useState(0);
  const [edita, setEdita] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: actions.custom, payload: customCount });
    setEdita(!edita);
  }

  function haldleEditaValor() {
    setEdita(!edita);
  }

  return (
    <>
        <Header />

      <div>
        <h3>Counter com useReducer</h3>

        <br />
        <Button
          disabled={edita}
          variant="contained"
          color="primary"
          type="button"
          onClick={() => dispatch({ type: actions.increment })}
        >
          +
        </Button>
        <Button
          disabled={edita}
          variant="contained"
          color="primary"
          type="button"
          onClick={() => dispatch({ type: actions.decrement })}
        >
          -
        </Button>
        <Button
          disabled={edita}
          variant="contained"
          color="primary"
          type="button"
          onClick={() => dispatch({ type: actions.double })}
        >
          *2
        </Button>
        <Button
          disabled={edita}
          variant="contained"
          color="primary"
          type="button"
          onClick={() => dispatch({ type: actions.half })}
        >
          /2
        </Button>
        <Button
          disabled={edita}
          variant="contained"
          color="primary"
          type="button"
          onClick={() => dispatch({ type: actions.reset })}
        >
          reset
        </Button>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="custom_value">Count: </label>

          {!edita && (
            <div>
              <label onClick={() => haldleEditaValor}>{state.count}</label>
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={haldleEditaValor}
              >
                Editar
              </Button>
            </div>
          )}
          {edita && (
            <div>
              <TextField
                id="custom_value"
                type="number"
                value={customCount}
                onChange={(e) => setCustomCount(e.target.value)}
              />{" "}
              <Button variant="contained" color="primary" type="submit">
                Salvar
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={haldleEditaValor}
              >
                Cancelar
              </Button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
