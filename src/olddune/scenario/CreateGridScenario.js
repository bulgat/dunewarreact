import {Country} from "../modelStrategy/Country.js";
import {ModelStrategy} from "../modelStrategy/ModelStrategy.js";
import {Point} from "../modelStrategy/Point.js";
import {GraficBibleConstant} from "../GraficConstant/GraficBibleConstant.js";

export class CreateGridScenario {
	
	AddCountry = function()
	{
		
		window._battlePlanetModel.DispositionCountry_ar = [];

		window._battlePlanetModel.DispositionCountryAdd(new Country(1, 1, 3, false));
window._battlePlanetModel.DispositionCountryAdd(new Country(window._battlePlanetModel.FlagIdHero,
				2, 30, true));
window._battlePlanetModel.DispositionCountryAdd(new Country(2, 0, 0, false));



		new ModelStrategy().InitContact(window._battlePlanetModel.GetDispositionCountry());

		new ModelStrategy().SetContactPeace(window._battlePlanetModel.GetDispositionCountry(), new Point(1, window._battlePlanetModel.FlagIdHero), false);
		new ModelStrategy().SetContactPeace(window._battlePlanetModel.GetDispositionCountry(), new Point(2, window._battlePlanetModel.FlagIdHero), false);

		
	}
	
	GetImageIcon = function(UnitTypeId)
	{
		var nameImage;
		switch (UnitTypeId)
		{
			case 0:
				nameImage = new GraficBibleConstant().UnitIcon0;
				break;
			case 1:
				nameImage = new GraficBibleConstant().UnitIcon1;
				break;
			case 2:
				nameImage = new GraficBibleConstant().UnitIcon2;
				break;
			case 3:
				nameImage = new GraficBibleConstant().UnitIcon3;
				break;
			default:
				nameImage = "Invalid month";
				break;
		}
		return nameImage;
	};
}