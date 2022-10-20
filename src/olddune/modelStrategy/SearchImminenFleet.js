import {Point} from "./Point.js";
import {ModelStrategy} from "./ModelStrategy.js";

export class SearchImminenFleet{
	SearchImminenHeroGlob = function(NameHero_ar,gridFleet,DispositionCountry_ar, Grid_ar) {
		var SpotStrPlX = 0;
		var SpotStrPlY = 0;
		
		let point = new Point(SpotStrPlX, SpotStrPlY);
		
		if(!Array.isArray(Grid_ar)){
			console.error("Grid_ar not array! Grid_ar = "+Grid_ar);
			throw new Error("Grid_ar not array!");
		}
		
		var DifferenceX = Grid_ar[Grid_ar.length - 1].SpotX;
		var DifferenceY = Grid_ar[Grid_ar.length - 1].SpotY;
		
		
		
		for (let d2 = 0; d2 < NameHero_ar.length; d2++)
		{
			
			if (NameHero_ar[d2].GetFlagId() != gridFleet.GetFlagId())
			{
				let modelStrategy  = new ModelStrategy();

				if (modelStrategy.GetContactPeace(DispositionCountry_ar, new Point(NameHero_ar[d2].GetFlagId(), gridFleet.GetFlagId())))
				{
					// peace
				}
				else
				{
					 
					// war
					// 
					if (NameHero_ar[d2].SpotX < DifferenceX && NameHero_ar[d2].SpotY < DifferenceY)
					{

						DifferenceX = DifferenceX - NameHero_ar[d2].SpotX;
						DifferenceY = DifferenceY - NameHero_ar[d2].SpotY;

						SpotStrPlX = NameHero_ar[d2].SpotX;
						SpotStrPlY = NameHero_ar[d2].SpotY;

						// most near fleet
						point.X = SpotStrPlX;
						point.Y = SpotStrPlY;
					}
					
				}
				
			}
		}
		
		return point;
	}
}