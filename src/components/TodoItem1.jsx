import React from "react";

const TodoItem1 = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-4">
          <h4>BuyMilk</h4>
        </div>
        <div class="col-3">
          <h4>4/3/22</h4>
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

export default TodoItem1;
