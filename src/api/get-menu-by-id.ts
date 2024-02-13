import getData from "../mocks/get-data";
import handler from "../mocks/handler";

const getMenuById = () =>
  handler(
    "get",
    "/menu/:id",
    getData("menu"),
    (req, data) => data.store1[req.params.id],
  );

export default getMenuById;
