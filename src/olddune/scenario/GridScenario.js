import {InitGlobalParams} from "./InitGlobalParams.js";
import {Island} from "../modelStrategy/Island.js";

export class GridScenario{
	
	Mission = "Вперед рекрут!";
	NameTileMap = "map/duneMap.tmx";
	NoTown = true;
	GetNameTileMap = function()
	{
		return this.NameTileMap;
	};
	GetMission =function()
	{
		return this.Mission;
	}
	Init = function()
	{
		var initGlobalParams = new InitGlobalParams();
		
		/*
		_mapWorldModel._prototypeHeroDemo.HeroFleetAdd(new ModelStrategy().GetFleetFast(2, 3,
				_battlePlanetModel.FlagIdHero,
				initGlobalParams.GetOfferNameHero(), 0,
				_battlePlanetModel.GetBasaPurchaseUnitScience(), false, 0));
		*/
		
		
			
			//window._mapWorldModel._islandDemoMemento.AddIsland(new Island("Dion", 0, 2, 0, false, window._battlePlanetModel.FlagIdHero));
		//window._mapWorldModel._islandDemoMemento.AddIsland(new Island("Madagascar", 2, 2, 1, false, 1));
	};
}