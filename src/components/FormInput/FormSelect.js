import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { useGetData } from "../Hooks/useGetData";
import { InputLoading } from "./InputLoading";
import "./FormSelect.css";

function FormSelect({ name, holder, value, setValue, option, field}) {
  const { menuOptions } = React.useContext(MenuContext);
  const { data, isLoading } = useGetData(menuOptions[option].url);

  return (
    <>
      {isLoading ? <InputLoading holder={holder}/> :
      (
        <div className="flx flx-col">
          <label
            htmlFor={name}
            className="frm-select-label"
          >
            {holder}
          </label>
          <select
            id={name}
            name={name}
            className="frm-select"
            value={value[name]}
            onChange={(event) => {
              const {id, ...valueNoId} = value;
              const newValue = {
                ...valueNoId,
                [name]: Number(event.target.value)
              }
              setValue(newValue)
            }}
          >
            <option value="" disabled>Select an option</option>
            {data.map((option) => {
              return (
                <option
                  key={option.id}
                  value={option.id}
                >{option[field]}</option>
              )
            })}
          </select>
        </div>
      )}
    </>
  )
}

export { FormSelect };