import {IShipCustom} from "./IShipCustom.js";
import {ItemCustom0} from "./ItemCustom0.js";
import {ItemCustom55} from "./ItemCustom55.js";

export class ShipCustom1{
	/*
	constructor(){
		super();
	}
	*/
	GetIdCapsuleList = function()
	{

		var item_ar = [];
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
	};
}