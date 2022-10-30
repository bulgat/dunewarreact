import {GridFleet} from "./GridFleet.js";
import {ShipUnit} from "./ShipUnit.js";
import {ArmUnit} from "./ArmUnit.js";

export class CreateFleetFast{
	GetFleetFast = function(SpotX, SpotY, FlagId, image,
			Name, UnitTypeId, BasaPurchaseUnitScience_ar,
			AddOne, customShip)
	{
   




		var heroPlayer = new GridFleet( SpotX, SpotY, FlagId,UnitTypeId);
		
		
		
		var shipPlayer = new ShipUnit();
		if (AddOne)
		{
			shipPlayer.GetArmUnitArray().Add(new ArmUnit(BasaPurchaseUnitScience_ar, UnitTypeId, customShip));
		}
		else
		{
			for (var i = 0; i < window._battlePlanetModel.SizeSquad; i++)
			{
				shipPlayer.GetArmUnitArray().Add(new ArmUnit(BasaPurchaseUnitScience_ar, UnitTypeId, customShip));
			}
		}

this.HeroFleetAdd(SpotX, SpotY, UnitTypeId,FlagId);

		heroPlayer.AddShipName(shipPlayer);
		//heroPlayer.SetId(BattlePlanetModel.FleetId);
		window._battlePlanetModel.FleetId += 1;

		return heroPlayer;
	};
	FleetAddArmFast = function(heroPlayer, UnitTypeId,
			BasaPurchaseUnitScience_ar, customShip)
	{
		
		var shipPlayer = heroPlayer.GetShipName();

		shipPlayer.GetArmUnitArray().push(new ArmUnit(BasaPurchaseUnitScience_ar, UnitTypeId, customShip));
	};
	
	HeroFleetAdd(X, Y,Type,FlagId,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo)
	{

		var nameHero = new GridFleet(X, Y, FlagId,Type,BasaPurchaseUnitScience_ar,GetIncrementUnitId);

		/*
		var nameHero = _mapWorldModel._prototypeHeroDemo.HeroFleetAdd(new ModelStrategy().GetFleetFast(
		2, //spot x
		3, //spot y
		FlagId,			//_battlePlanetModel.FlagIdHero,//FlagId
					new InitGlobalParams().GetOfferNameHero(),
					Type, //0, //UnitTypeId
					_battlePlanetModel.GetBasaPurchaseUnitScience(), false, 0));
		*/

		nameHero.SetPoint(X,Y);
		nameHero.type=Type;
		nameHero.position=this.GetPositionPointArray(X, Y);
		nameHero.tileToPosition=[window.tileW*X,window.tileH*Y];
		nameHero.tileFrom=[X,Y];
		nameHero.tileTo=[X,Y];
		nameHero.move= false;
		nameHero.flagId=FlagId;
		nameHero.SetId(window._countHeroIndex);

		//add arm

		prototypeHeroDemo.GetHeroFleet().push(nameHero);


		window._countHeroIndex++;
	}
	GetPositionPointArray(X, Y) {
		return [window.tileW/2+window.tileW*X,window.tileH/2+window.tileH*Y];
	}
}