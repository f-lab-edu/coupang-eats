import { RestRequest } from "msw";

export type MethodT = "get" | "post" | "put" | "delete";

type MenuDataT = {
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

type VendorDataT = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
};

export type DataT =
  | Record<string, Record<string, MenuDataT>>
  | Record<string, VendorDataT>
  | undefined;

export type CallBackT = {
  store1: DataT;
};

export type CallBackType = (req: RestRequest, data: DataT) => DataT;
