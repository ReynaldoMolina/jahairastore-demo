import React from "react";
import add from "./add.svg";
import filter from "./filter.svg";
import deleteinput from "./deleteinput.svg";
import "./ActionTools.css"
import { DataContext } from "../Context/DataContext";

function ActionTools({ allowNew = true, size }) {
  const {
    searchValue, setSearchValue,
    setOpenModal,
    setRegisterId, setIsNew
  } = React.useContext(DataContext);
  
  return (
    <>
      <div className="flx flx-center action-buttons">
        <search className="flx flx-center search">
          <input
            type="search"
            id="search-bar"
            className="action-search action-icon"
            placeholder="Search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          ></input>
        </search>
        <button
          className="flx flx-center action-btn"
          onClick={() => {
            if (searchValue !== '') {
              setSearchValue('');
            }
          }}>
          <img src={deleteinput} alt="Delete search"></img>
        </button>
        <button
          className={`flx flx-center action-btn ${allowNew || "hidden"}`}
          onClick={() => {
            if (size > 4) {
              alert('In this demo you can create up to 5 rows per table');
              return;
            }
            setRegisterId('');
            setIsNew(true);
            setOpenModal(true);
          }}
        >
          <img src={add} alt="New"></img>
        </button>
        <button className="flx flx-center action-btn">
          <img src={filter} alt="Filter"></img>
        </button>
      </div>
    </>
  )
}

export { ActionTools };