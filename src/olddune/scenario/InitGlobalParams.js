import {GridCrewScience} from "../modelStrategy/GridCrewScience.js";
import {PrototypeHeroDemo} from "../model/prototype/PrototypeHeroDemo.js";
import {IslandDemoMemento} from "../model/memento/IslandDemoMemento.js";
import {MusicBibleConstant} from "../GraficConstant/MusicBibleConstant.js";

export class InitGlobalParams{
	
	constructor() {
		this.InitGlobalParams();
	};
	InitGlobalParams = function()
	{
		let musicBibleConstant = new MusicBibleConstant()
		window._battlePlanetModel.InitBasaPurchaseUnitScience();

		window._battlePlanetModel.BasaPurchaseUnitScienceAdd(new GridCrewScience(0, 20, 20, 1, 1, 117, 53, 0, 0, 2, 2, false,
			musicBibleConstant.Cannon,
			musicBibleConstant.Vehicle, false, 3, false, 0));

				window._battlePlanetModel.BasaPurchaseUnitScienceAdd(new GridCrewScience(1, 30, 30, 2, 2, 180, 65,  1, 0, 2, 1, false,
					musicBibleConstant.Cannon,
					musicBibleConstant.Vehicle, false, 4, false, 0));
//2, 10
window._battlePlanetModel.BasaPurchaseUnitScienceAdd(new GridCrewScience(2, 10, 10, 1, 1, 40, 40,  2, .4, .4, 1, true,
	musicBibleConstant.Musket,
	musicBibleConstant.Walk, false, 1, false, 0));

				window._battlePlanetModel.BasaPurchaseUnitScienceAdd(new GridCrewScience(3, 10, 10, 1, 1, 97, 48,  2, 1, 2, 3, true,
					musicBibleConstant.Machinegun,
					musicBibleConstant.Vehicle, false, 2, false, 0));

				window._battlePlanetModel.BasaPurchaseUnitScienceAdd(new GridCrewScience(4, 10, 10, 1, 1, 117, 53,  2, .7, .7, 2, true,
					musicBibleConstant.Missile,
					musicBibleConstant.Vehicle, true, 4, false, 0));

				window._battlePlanetModel.BasaPurchaseUnitScienceAdd(new GridCrewScience(5, 65, 30, 2, 2, 180, 65,  1, 0, 2, 3, false,
					musicBibleConstant.Cannon,
					musicBibleConstant.Vehicle, true, 4, true, 29));

				window._battlePlanetModel.BasaPurchaseUnitScienceAdd(new GridCrewScience(6, 65, 30, 2, 2, 180, 65,  1, 0, 2, 3, false,
					musicBibleConstant.Cannon,
					musicBibleConstant.Vehicle, true, 4, true, 30));

				window._mapWorldModel._prototypeHeroDemo = new PrototypeHeroDemo();
		window._mapWorldModel._prototypeHeroDemo.HeroFleetInit();
		window._mapWorldModel._islandDemoMemento = new IslandDemoMemento();
		window._mapWorldModel._islandDemoMemento.Init();
		
		

		window._battlePlanetModel.DispositionCountry_ar = [];
	};
	GetOfferNameHero = function()
	{
		//var rand = new System.Random();

		//var num = rand.Next(_battlePlanetModel.OfferNameHero_ar.Length);
		
		var num =Math.floor(Math.random() * window._battlePlanetModel.OfferNameHero_ar.length);

		return window.Array_battlePlanetModel.OfferNameHero_ar[num];
	};
}