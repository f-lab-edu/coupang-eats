import { RestRequest } from "msw";

export type MethodT = "get" | "post" | "put" | "delete";

export type MenuDataT = {
  id: string;
  name: string;
  type: string;
  price: {
    defaultPrice: number;
    salePrice?: number;
  };
  imageSrc?: string;
  quantity: number;
  refId?: string[];
  required?: number;
};

export type VendorDataT = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
};

export type DataT = MenuDataT[] | VendorDataT[] | undefined;

export type CallBackType = (
  req: RestRequest,
  data: DataT,
) => MenuDataT | VendorDataT | undefined | DataT;
