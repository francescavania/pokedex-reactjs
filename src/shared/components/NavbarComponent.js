import React from 'react';

export default function NavbarComponent() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">PokeDex</a>
        <form className="form-inline d-flex">
          <input className="form-control mr-sm-2" style={{marginRight:"5px"}}type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    </>
  );
}
