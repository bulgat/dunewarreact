import {ShipCustom1} from "../seaTactic/informationCustom/ShipCustom1";
import {ShipCustom2} from "../seaTactic/informationCustom/ShipCustom2";

export class BuilderShipCustom{
	GetBuilderShipCustom = function(Id)
	{
		var shipCustom1;
		if (Id == 1)
		{
			shipCustom1 = new ShipCustom1();
			return shipCustom1.GetIdCapsuleList();
		}
		if (Id == 2)
		{
			shipCustom1 = new ShipCustom2();
			return shipCustom1.GetIdCapsuleList();
		}
		shipCustom1 = new ShipCustom1();
		return shipCustom1.GetIdCapsuleList();
	}
}