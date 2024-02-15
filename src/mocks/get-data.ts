import vendorJSON from "./__fixtures__/vendor.json";
import menuJSON from "./__fixtures__/menu.json";
import { VendorDataT, MenuDataT } from "./types";

const getData = (target: string) => {
  try {
    switch (target) {
      case "vendor":
        return vendorJSON as VendorDataT[];
      case "menu":
        return menuJSON as MenuDataT[];
      default:
        throw new Error("No data");
    }
  } catch (error) {
    if (import.meta.env.DEV) console.error(error);
  }
};

export default getData;
