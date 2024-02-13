import getData from "../mocks/get-data";
import handler from "../mocks/handler";

const getMenuList = () =>
  handler("get", "/menuList", getData("menu"), (req, data) => data);

export default getMenuList;
