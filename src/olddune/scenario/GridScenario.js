import {InitGlobalParams} from "./InitGlobalParams.js";
import {Island} from "../modelStrategy/Island.js";
import {CreateFleetFast} from "../modelStrategy/CreateFleetFast";

export class GridScenario{
	


	Mission = "Вперед рекрут!";
	NameTileMap = "map/duneMap.tmx";
	NoTown = true;
	constructor(){
		//throw Error("DDDDDDD")
	}
	GetNameTileMap = function()
	{
		return this.NameTileMap;
	};
	GetMission =function()
	{
		return this.Mission;
	}
	Init = function(FlagIdHero,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo)
	{
		//var initGlobalParams = new InitGlobalParams();
		
		/*
		_mapWorldModel._prototypeHeroDemo.HeroFleetAdd(new ModelStrategy().GetFleetFast(2, 3,
				_battlePlanetModel.FlagIdHero,
				initGlobalParams.GetOfferNameHero(), 0,
				_battlePlanetModel.GetBasaPurchaseUnitScience(), false, 0));
		*/
		new CreateFleetFast().HeroFleetAdd(1, 5, 0,FlagIdHero,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(1, 4, 2,FlagIdHero,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(1, 6, 1,FlagIdHero,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(1, 8, 0,FlagIdHero,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);

		new CreateFleetFast().HeroFleetAdd(4, 2, 3,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);

		new CreateFleetFast().HeroFleetAdd(5, 2, 2,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(2, 1, 2,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(2, 4, 3,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(1, 3, 4,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(9, 1, 3,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);

		new CreateFleetFast().HeroFleetAdd(1, 0, 3,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(0, 1, 5,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(3, 5, 2,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(7, 11, 4,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(11, 11, 4,1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);
		new CreateFleetFast().HeroFleetAdd(3, 7, 1,0,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo);


		let island_ar = [];
			
		island_ar.push(new Island("Dion", 3, 3, 0, false, FlagIdHero));
		island_ar.push(new Island("Madagascar", 5, 5, 1, false, 1));
		return island_ar;
	};
}