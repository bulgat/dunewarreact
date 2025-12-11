import {TimeSalvoAppendHit} from "../model/TimeSalvoAppendHit";
import {ModelStrategy} from "./ModelStrategy.js";
import {Point} from "./Point.js";
import {ArmUnitAndFleet} from "../model/ArmUnitAndFleet";

export class MendMoveAbleFire{
	GetAbleFireWithDistance = function(gridFleet,
			pointLongRange,  ArmUnitFleet,
			GlobalParamsTimeQuick, GlobalParamsGale
			)
	{
		var timeSalvoAppendHit = new TimeSalvoAppendHit();

		var Distance = ModelStrategy.GetDistance(
				new Point(gridFleet.SpotX, gridFleet.SpotY),
				pointLongRange);

		return timeSalvoAppendHit.GetCannonAbleList(Distance, ArmUnitFleet.ShipCapsuleList,
				GlobalParamsTimeQuick, GlobalParamsGale);
	};
	DetermineAbleFirePlayer = function(fleetFiend, fleetPlayer, gridFleet,
			pointLongRange,
			GlobalParamsTimeQuick, GlobalParamsGale)
	{

		var armUnitAndFleet = new ArmUnitAndFleet();
		var ArmUnitFleet = armUnitAndFleet.GetArmUnitIdFleet(gridFleet.GetId(),
			fleetFiend, fleetPlayer);

		var cannonAbleList = ModelStrategy.GetAbleFireWithDistance(gridFleet,

				new Point(gridFleet.SpotX + 2, gridFleet.SpotY + 2),

			ArmUnitFleet,
			GlobalParamsTimeQuick, GlobalParamsGale
			);
		return cannonAbleList.Count > 0;

	};
}