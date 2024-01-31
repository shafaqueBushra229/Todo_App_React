function Todo_Add_new() {
  return (
    <div class="row">
      <div class="col-4">
        <input type="textarea" placeholder="Enter your note"></input>
      </div>
      <div class="col-4">
        <input type="date"></input>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default Todo_Add_new;
