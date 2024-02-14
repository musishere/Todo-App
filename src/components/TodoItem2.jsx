import React from "react";

const TodoItem2 = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-4">
          <h4>Go To College</h4>
        </div>
        <div class="col-3">
          <h4>4/1/19</h4>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem2;
