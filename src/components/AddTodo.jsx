import React from "react";

const AddTodo = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-4">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-3">
          <input type="Date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
