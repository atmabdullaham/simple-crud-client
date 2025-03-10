import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div>
      Update:{loadedData.name}
      <form>
        <input type="text" name="name" id="" defaultValue={loadedData?.name} />
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loadedData.email}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
