import {Country} from "../modelStrategy/Country.js";
import {ModelStrategy} from "../modelStrategy/ModelStrategy.js";
import {Point} from "../modelStrategy/Point.js";
import {GraficBibleConstant} from "../GraficConstant/GraficBibleConstant.js";

export class CreateGridScenario {
	
	AddCountry = function(battlePlanetModel)
	{
		
		battlePlanetModel.DispositionCountry_ar = [];

		battlePlanetModel.DispositionCountryAdd(new Country(1, 1, 3, false));
		battlePlanetModel.DispositionCountryAdd(new Country(battlePlanetModel.FlagIdHero,
						2, 30, true));
		battlePlanetModel.DispositionCountryAdd(new Country(2, 0, 0, false));



		new ModelStrategy().InitContact(battlePlanetModel.GetDispositionCountry());

		new ModelStrategy().SetContactPeace(battlePlanetModel.GetDispositionCountry(), new Point(1, battlePlanetModel.FlagIdHero), false);
		new ModelStrategy().SetContactPeace(battlePlanetModel.GetDispositionCountry(), new Point(2, battlePlanetModel.FlagIdHero), false);

		
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