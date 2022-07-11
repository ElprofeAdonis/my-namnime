import React from "react";

const MyRandon = ({ apiData }) => {
  return (
    <div className="my-randon">
      <div className="imagen">
        <img src={apiData[1].url} alt={apiData[1].url} />
      </div>
      <div className="my-anime">
        <div className="description">
          <div className="strup">
            <h3>{apiData[0]}</h3>
            <h4>{apiData[2]}</h4>
            <h4>{apiData[5].publisher}</h4>
            <h4>{apiData[4].occupation}</h4>
          </div>
          <div className="strupp">
            <h3>{apiData[6].race}</h3>
            <h4>{apiData[7].publisher}</h4>
            <h4>{apiData[8].gender}</h4>
            <h4>S{apiData[9].base}</h4>
          </div>
        </div>
        <div className="text">{apiData[3].relatives}</div>
      </div>
    </div>
  );
};
export default MyRandon;
