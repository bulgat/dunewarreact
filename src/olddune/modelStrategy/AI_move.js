import {AI_Behavior} from "./AI_Behavior";

export class AI_move{
	Operate = function (PrototypeHeroDemo_ar,NameHeroFleet,Grid_ar,
		DispositionCountry_ar,Sea,Island_ar,BasaPurchaseUnitScience_ar,GetIncrementUnitId)
	{
		var aI_Behavior = new AI_Behavior();
		
		
		
		return aI_Behavior.TacticSearchIslandAndHero(PrototypeHeroDemo_ar,NameHeroFleet,Grid_ar,
			DispositionCountry_ar,Sea,Island_ar,BasaPurchaseUnitScience_ar,GetIncrementUnitId
			);
	}
}