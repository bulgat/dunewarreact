import {FiendFleet} from "./FiendFleet.js";

export class SelectHeroMap {
	PuttingShadeAttack(NameHero_ar, heroFiend)
	{


		var heroPlayer = this.PuttingRelayBattle_Hero(heroFiend.SpotX, heroFiend.SpotY,
				NameHero_ar, heroFiend.GetFlagId());



		if (heroPlayer != null)
		{
			var fiendFleet = new FiendFleet();
			var allFiendHero = fiendFleet.GetFiendHeroAllWar(
					heroFiend.SpotX, heroFiend.SpotY
					, heroFiend.GetFlagId(),
					NameHero_ar);

			if (allFiendHero.length > 0)
			{

				return heroPlayer;


			}

		}


		return null;
	};
	PuttingRelayBattle_Hero = function(PlaceX, PlaceZ, NameHero_ar, flagId)
	{
		
		for (var d = 0; d < NameHero_ar.length; d++)
		{
			var fiendFleet = new FiendFleet();
			var heroFiend = fiendFleet.SearchHeroOne(PlaceX, PlaceZ, NameHero_ar, flagId, true);


			if (heroFiend != null)
			{

				if (heroFiend.GetFlagId() != flagId)
				{

					if (NameHero_ar[d].SpotX == PlaceX && NameHero_ar[d].SpotY == PlaceZ)
					{

						return heroFiend;

					}
				}
			}
		}

		return null;


	}
}