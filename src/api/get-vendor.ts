import getData from "../mocks/get-data";
import handler from "../mocks/handler";

const getVendor = () =>
  handler("get", "/vendor", getData("vendor"), (req, data) => data);

export default getVendor;
