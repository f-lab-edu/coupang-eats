import getData from "../mocks/get-data";
import handler from "../mocks/handler";

const getMenuById = () =>
  handler("get", "/menu/:id", getData("menu"), (req, data) =>
    data?.find(item => item.id === req.params.id),
  );

export default getMenuById;
