import {Point} from "./Point";
import {ModelStrategy} from "./ModelStrategy";
import {WayGotoModel} from "./WayGotoModel";

export class WayGotoSelectField {
	CreateVariationWay = function(Speed)
	{
		
		var wayRude_ar = [];
		var center = new Point(Speed, Speed);

		for (var i = 0; i < (center.X * 2 + 1); i++)
		{
			for (var z = 0; z < (center.Y * 2 + 1); z++)
			{
				if (center.X == i && center.Y == z)
				{

				}
				else
				{

					wayRude_ar.push(new Point(center.X - i, center.Y - z));

				}
			}
		}
		return wayRude_ar;
	};
	SelectVariationWayFleet = function(
			Hero,
			wayRude_ar,
			DispositionCountry_ar,
			ShoalSeaBasa_ar,
			Island_ar, prototypeHeroDemo,
			GridTile_ar)
	{

		var wayGotoModel_ar = [];
		var modelStrategy = new ModelStrategy();


		console.log("0221 ===== DDDDDDD",wayRude_ar.length)
		// all point move.
		for(let i=0;i< wayRude_ar.length;i++)
		{
			var wayPoint = wayRude_ar[i];
			var mapPoint = new Point(Hero.SpotX + wayPoint.X, Hero.SpotY + wayPoint.Y);
			
			console.log("0222 DDDDDDD [ "+mapPoint.X+" x "+mapPoint.Y+" ] ",mapPoint)
			console.log("0223 DD hero [ "+Hero.SpotX+" x "+Hero.SpotY+" ]",ShoalSeaBasa_ar)

			// Выходит ли x and y за карту.
			if (modelStrategy.AllowPointMap(ShoalSeaBasa_ar,
							new Point(mapPoint.X, mapPoint.Y)))
			{
				
				let pathPoint_ar = modelStrategy.GetFindPathBigArray(
						mapPoint,
					new Point(Hero.SpotX, Hero.SpotY),
					Hero.GetFlagId(),
					prototypeHeroDemo.GetHeroFleet(),
					GridTile_ar,
					DispositionCountry_ar, true, Hero.GetSea(), Island_ar,
					new Point(Hero.SpotX, Hero.SpotY));

console.log("0224 DDDDDDD L = "+pathPoint_ar .length+"   AllowPointMap true",pathPoint_ar )

				var wayGotoModel = new WayGotoModel(mapPoint.X, mapPoint.Y);
				wayGotoModel.PathGoto_ar = pathPoint_ar;
				wayGotoModel_ar.push(wayGotoModel);

			}


		}
		console.log("0225 ===== DDDDDDD",wayGotoModel_ar)

		return wayGotoModel_ar;
	}
}