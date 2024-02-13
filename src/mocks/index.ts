import { setupWorker } from "msw";
import getVendor from "../api/get-vendor";
import getMenuList from "../api/get-menu-list";
import getMenuById from "../api/get-menu-by-id";

const initMocks = () => {
  try {
    const mockHandler = [getVendor, getMenuList, getMenuById].map(handler =>
      handler(),
    );
    const worker = setupWorker(...mockHandler);
    worker.start();
    return true;
  } catch (error) {
    if (import.meta.env.DEV) console.error(`worker error: ${error}`);
  }
  return false;
};

export default initMocks;
