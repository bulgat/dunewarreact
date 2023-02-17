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

	
		new CreateFleetFast().HeroFleetAdd(1, 5, FlagIdHero,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"mTank");
		new CreateFleetFast().HeroFleetAdd(1, 4, FlagIdHero,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"infant");
		new CreateFleetFast().HeroFleetAdd(1, 6, FlagIdHero,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"hTank");
		new CreateFleetFast().HeroFleetAdd(1, 8, FlagIdHero,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"mTank");

		new CreateFleetFast().HeroFleetAdd(4, 2, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"car");

		new CreateFleetFast().HeroFleetAdd(5, 2, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"infant");
		new CreateFleetFast().HeroFleetAdd(2, 1, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"infant");
		new CreateFleetFast().HeroFleetAdd(2, 4, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"car");
		new CreateFleetFast().HeroFleetAdd(1, 3, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"rTank");
		new CreateFleetFast().HeroFleetAdd(9, 1, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"car");

		new CreateFleetFast().HeroFleetAdd(1, 0, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"car");
		new CreateFleetFast().HeroFleetAdd(0, 1, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"car");
		new CreateFleetFast().HeroFleetAdd(3, 5, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"infant");
		new CreateFleetFast().HeroFleetAdd(7, 11, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"rTank");
		new CreateFleetFast().HeroFleetAdd(11, 11, 1,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"rTank");
		new CreateFleetFast().HeroFleetAdd(3, 7, 0,BasaPurchaseUnitScience_ar,GetIncrementUnitId,prototypeHeroDemo,"hTank");


		let island_ar = [];
			
		island_ar.push(new Island("Dion", 3, 3, 0, false, FlagIdHero));
		island_ar.push(new Island("Madagascar", 5, 5, 1, false, 1));
		return island_ar;
	};
}