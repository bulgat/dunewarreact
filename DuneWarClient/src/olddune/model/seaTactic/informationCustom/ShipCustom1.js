import {IShipCustom} from "./IShipCustom";
import {ItemCustom0} from "../informationItem/ItemCustom0";
import {ItemCustom55} from "../informationItem/ItemCustom55";

export class ShipCustom1 extends IShipCustom
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
	
		item_ar.push(new ItemCustom55());
		item_ar.push(new ItemCustom0());

		item_ar.push(new ItemCustom0());
		item_ar.push(new ItemCustom0());
		item_ar.push(new ItemCustom0());

		item_ar.push(new ItemCustom55());
		return item_ar;


	}
}
