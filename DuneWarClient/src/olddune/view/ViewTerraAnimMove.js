import {AnimationMove} from "../model/battlePlanet/AnimationMove";
import {BattlePlanetModel} from "../model/BattlePlanetModel";
import {BattlePlanetView} from "./globalMap/BattlePlanetView";

export class ViewTerraAnimMove{
	_animationMove=null;
	AnimationCommand = function(
		battlePlanetView,
        StageWidthX,
		Tick,
            commandStrategy,
            width,
            _animCaptureIsland,
            _createHero, SlipX, SlipY,
            BasaPurchaseUnitScience_ar,
            SceneList, SadIslandId, SelectAttackId, 
			UnitHeroGameObjectList) 
	{
		this._animationMove= new AnimationMove();
		
		//var battlePlanetModel = new BattlePlanetModel();
		
		if(!battlePlanetView)
		{
			battlePlanetView = new BattlePlanetView();
		}

		
		battlePlanetView.SetCommandStrategy(
			this._animationMove.AnimationCommand(
			StageWidthX,
			Tick,
			  commandStrategy,
			 null, width, _animCaptureIsland, _createHero,
			 SlipX, SlipY,
			 window._battlePlanetModel.GetBasaPurchaseUnitScience(),
			 SceneList, SadIslandId, SelectAttackId, UnitHeroGameObjectList
		 ));
		 
	};
}