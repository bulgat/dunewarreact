import {GridFleet} from "./GridFleet.js";
import {ShipUnit} from "./ShipUnit.js";
import {ArmUnit} from "./ArmUnit.js";
import { BasaPurchaseUnitScienceHelp } from "./BasaPurchaseUnitScienceHelp.js";

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
	
	HeroFleetAdd(X, Y,FlagId,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,TypeName)
	{
		let nameUnit =TypeName;
		//let nameUnit =new BasaPurchaseUnitScienceHelp().ConvertIdInName(Type,BasaPurchaseUnitScience_ar)
		let nameHeroFleet = new GridFleet(X, Y, FlagId,BasaPurchaseUnitScience_ar,GetIncrementUnitId,nameUnit);

		

		nameHeroFleet.SetPoint(X,Y);
		nameHeroFleet.type=nameHeroFleet.GetType();
		;
		
		//nameHero.type=Type;
		nameHeroFleet.position=this.GetPositionPointArray(X, Y);
		nameHeroFleet.tileToPosition=[window.tileW*X,window.tileH*Y];
		nameHeroFleet.tileFrom=[X,Y];
		nameHeroFleet.tileTo=[X,Y];
		nameHeroFleet.move= false;
		nameHeroFleet.flagId=FlagId;
		nameHeroFleet.SetId(window._countHeroIndex);

		//add arm

		prototypeHeroDemo.GetHeroFleet().push(nameHeroFleet);


		window._countHeroIndex++;
	}
	GetPositionPointArray(X, Y) {
		return [window.tileW/2+window.tileW*X,window.tileH/2+window.tileH*Y];
	}
}