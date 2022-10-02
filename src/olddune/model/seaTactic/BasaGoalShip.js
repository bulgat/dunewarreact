
import {ShipData29} from "./information/ShipData29";
import {ShipData30} from "./information/ShipData30";

export class BasaGoalShip 
{
	BasaGoalItem_ar;
	constructor(Id)
	{

		if (Id == 29)
		{
			let shipData30 = new ShipData29();
			this.BasaGoalItem_ar = shipData30.GetShipData();
			return;
		}
		if (Id == 30)
		{
			let shipData30 = new ShipData30();
			this.BasaGoalItem_ar = shipData30.GetShipData();
			return;
		}

		this.BasaGoalItem_ar = [];

	}
	
}

