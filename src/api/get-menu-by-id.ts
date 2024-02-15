import getData from "../mocks/get-data";
import handler from "../mocks/handler";
import { MenuDataT } from "../mocks/types";
const getMenuById = () =>
  handler("get", "/menu/:id", getData("menu") as MenuDataT[], (req, data) => {
    return data?.find(item => item.id === req.params.id);
  });

export default getMenuById;
