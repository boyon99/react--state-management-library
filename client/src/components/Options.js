import React from 'react'

const Options = ({ name, updateItemCount }) => {
  return (
    <form>
      <input type="checkbox" id={`${name} option`}
      />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  )
}

export default Options