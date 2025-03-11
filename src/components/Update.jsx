import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(updatedUser);

    //
    fetch(`http://localhost:5000/users/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };
  return (
    <div>
      Update:{loadedData.name}
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="" defaultValue={loadedData?.name} />
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loadedData?.email}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
