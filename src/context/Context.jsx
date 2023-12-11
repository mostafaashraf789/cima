import React, { createContext } from 'react'
import { useState } from 'react';


export let shanta = createContext(0)

export default function Context(props) {

  const [search, setsearch] = useState('')

  function getSearch(e) {
    setsearch(e.target.value)
  }


  return <shanta.Provider value={{ search, getSearch }}>

    {props.children}

  </shanta.Provider>
}
