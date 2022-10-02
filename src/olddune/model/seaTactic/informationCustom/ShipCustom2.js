import {IShipCustom} from "./IShipCustom";
import {ItemCustom0} from "../informationItem/ItemCustom0";
import {ItemCustom62} from "../informationItem/ItemCustom62";

export class ShipCustom2 extends IShipCustom
{
	GetIdCapsuleList()
	{

		let item_ar = [];
		item_ar.push(new ItemCustom0());
		item_ar.push(new ItemCustom0());
		item_ar.push(new ItemCustom0());

		item_ar.push(new ItemCustom0());
		item_ar.push(new ItemCustom0());
		item_ar.push(new ItemCustom0());

		item_ar.push(new ItemCustom0());
		item_ar.push(new ItemCustom62());
		item_ar.push(new ItemCustom0());

		item_ar.push(new ItemCustom0());
		item_ar.push(new ItemCustom0());
		item_ar.push(new ItemCustom0());

		item_ar.push(new ItemCustom62());

		return item_ar;

	}
}
