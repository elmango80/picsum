import React from "react";

const Loading = () => {
  return (
    <div className="flex-row align-items-center">
      <div className="spinner-border text-light" role="status">
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  );
};

export default Loading;
