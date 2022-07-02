import React from 'react';

function Headers() {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid d-flex justify-content-around">
        <div>
          <a className="navbar-brand" href="/#">
            outstagram
          </a>
        </div>
        <form className="d-flex headerInput" role="search">
          <input className="form-control me-2" type="search" placeholder="搜尋" aria-label="Search" />
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        <div>
          <a className="navbar-brand" href="/#">
            其他
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
