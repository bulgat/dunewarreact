import {Point} from "../modelStrategy/Point";
import {ModelStrategy} from "../modelStrategy/ModelStrategy";

export class WayGotoAttack{
	 GetDistanceSQRT = function(Start, End)
	{

		var distance = this.GetDistance(Start, End);
		return (Math.abs(distance) >= 2);
	};
	GetDistance = function(Start, End)
	{
		return Math.sqrt((Math.pow((Start.X - End.X), 2) + Math.pow((Start.Y - End.Y), 2)));
	};
	PreparationAttackFleet = function(Hero,
			DispositionCountry_ar,
			 NameHero_ar,
			ShoalSeaBasa_ar,
			GetMapFlagIslandArray
			)
	{



		var CircleFleet_ar = GetMapFlagIslandArray;
		var fiendHero_ar = [];
		
		 
		CircleFleet_ar.forEach (function (point) 
		{
			
			var searchPoint = new Point(point[0] + Hero.SpotX, point[1] + Hero.SpotY);
			
			
			if (new ModelStrategy().AllowPointMap(ShoalSeaBasa_ar,
					searchPoint))
			{
				var fiendHeroLocal_ar = new ModelStrategy().GetFiendHeroAll(searchPoint.X, searchPoint.Y,
						Hero.GetFlagId(),
						NameHero_ar);
				fiendHeroLocal_ar.forEach (function(fleetFiend)
				{
					fiendHero_ar.push(fleetFiend);
				});
			}
		});
		
	    var fiendHeroWar_ar = [];
		fiendHero_ar.forEach (function(fiendFleetWar)
		{
			if (new ModelStrategy().GetContactPeace(DispositionCountry_ar,
					new Point(fiendFleetWar.GetFlagId(), Hero.GetFlagId())))
			{

			}
			else
			{
				fiendHeroWar_ar.push(fiendFleetWar);
			}
		});
		return fiendHeroWar_ar;
	};
}