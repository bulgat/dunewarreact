export class FiendFleet {

    GetIsland = function(Island_ar,
			DispositionCountry_ar, SpotX, SpotY)
	{
		Island_ar.forEach (function (isl )
		{
			if (isl.SpotX == SpotX && isl.SpotY == SpotY)
			{
				return isl;
			}
		});


		return null;
	}
	GetFiendHeroAllWar(spotX, spotY, flagId, NameHero_ar)
	{
		var hero_ar = this.GetFiendHeroAll(spotX, spotY, flagId, NameHero_ar);
		var heroWar_ar = [];
		for (var S = 0; S < hero_ar.length; S++)
		{
			heroWar_ar.push(hero_ar[S]);

		}
		return heroWar_ar;
	};
	GetFiendHeroAll(spotX, spotY, flagId, NameHero_ar)
	{
		var hero_ar = [];
		for (var S = 0; S < NameHero_ar.length; S++)
		{

			if (this.CoordinateCoincidence(spotX, spotY, NameHero_ar[S]))
			{
				if (NameHero_ar[S].GetFlagId() != flagId)
				{
					hero_ar.push(NameHero_ar[S]);

				}
			}
		}
		return hero_ar;
	};
	CoordinateCoincidence(spotX, spotY, GridFleet)
	{
		if (GridFleet.SpotX == spotX && GridFleet.SpotY == spotY)
		{
			return true;
		}
		return false;
	};
	SearchHeroOne = function(spotX, spotZ, NameHero_ar,
			flagId, Fiend)
	{
		for (var S = 0; S < NameHero_ar.length; S++)
		{

			if (this.CoordinateCoincidence(spotX, spotZ, NameHero_ar[S]))
			{
				
				if (Fiend)
				{
					if (flagId != NameHero_ar[S].GetFlagId())
					{
						
						return NameHero_ar[S];
					}
				}
				else
				{
					if (flagId == NameHero_ar[S].GetFlagId())
					{
						return NameHero_ar[S];
					}
				}
			}
		}

		return null;
	};
	GetFlagIslandArray = function(Island_ar, FlagId, FlagFiend)
	{
		var islandFiend_ar = [];
		Island_ar.forEach (function( isl)
		{
			// пїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅ.
			if (FlagFiend)
			{

				if (isl.FlagId != FlagId)
				{
					islandFiend_ar.push(isl);
				}
			}
			else
			{
				// пїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅ пїЅпїЅпїЅпїЅпїЅпїЅпїЅ.

				if (isl.FlagId == FlagId)
				{
					islandFiend_ar.push(isl);
				}
			}
		});
		return islandFiend_ar;
	};
	HeroAllCoordinateCoincidence = function(spotX, spotY,
			NameHero_ar)
	{
		var squareHero_ar = [];
		for (var S = 0; S < NameHero_ar.length; S++)
		{
			if (this.CoordinateCoincidence(spotX, spotY, NameHero_ar[S]))
			{
				squareHero_ar.push(NameHero_ar[S]);
			}
		}
		return squareHero_ar;
	};
	GetHeroAll = function(flagId, NameHero_ar)
	{
		var hero_ar = [];
		for (var S = 0; S < NameHero_ar.length; S++)
		{

			if (NameHero_ar[S].GetFlagId() == flagId)
			{

				hero_ar.push(NameHero_ar[S]);

			}
		}
		return hero_ar;

	}
}