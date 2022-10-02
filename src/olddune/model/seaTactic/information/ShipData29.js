﻿import {BasaGoalItem} from "../BasaGoalItem";
import {IShipData} from "./IShipData";

export class ShipData29 extends IShipData
{
	GetShipData()
	{
		let BasaGoalItem_ar = [];
		BasaGoalItem_ar.push(new BasaGoalItem(390, 603, false));
		BasaGoalItem_ar.push(new BasaGoalItem(450, 603, false));
		BasaGoalItem_ar.push(new BasaGoalItem(510, 603, false));
		BasaGoalItem_ar.push(new BasaGoalItem(570, 603, false));
		BasaGoalItem_ar.push(new BasaGoalItem(630, 603, false));
		BasaGoalItem_ar.push(new BasaGoalItem(690, 603, false));
		BasaGoalItem_ar.push(new BasaGoalItem(750, 603, false));

		//450-550
		BasaGoalItem_ar.push(new BasaGoalItem(450, 530, false));

		BasaGoalItem_ar.push(new BasaGoalItem(510, 540, false));
		BasaGoalItem_ar.push(new BasaGoalItem(570, 540, false));

		BasaGoalItem_ar.push(new BasaGoalItem(630, 540, false));
		BasaGoalItem_ar.push(new BasaGoalItem(690, 550, false));

		BasaGoalItem_ar.push(new BasaGoalItem(740, 530, true));
		return BasaGoalItem_ar;
	}
}
