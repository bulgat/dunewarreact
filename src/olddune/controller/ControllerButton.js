import {ControllerConstant} from "./ControllerConstant.js";

export class ControllerButton{
	EventCall = function(ConstantName, ModelName, EventButton)
	{
		if (ConstantName === new ControllerConstant().PathHero)
		{
			

			window._battlePlanetModel._mapWorldModel.GotoHero(EventButton);
			return;
		}
		if (ConstantName === new ControllerConstant().AttackHero)
		{

			

			window._battlePlanetModel._mapWorldModel.AttackHero(EventButton);
			return;
		}
		if (ConstantName === new ControllerConstant().SelectHeroLeft)
		{
			//SoundPlayPiano.PlaySound(MusicBibleConstant.Click);
			var buttonEvent = EventButton;


			window._battlePlanetModel._mapWorldModel.SelectHeroButton(buttonEvent);
			return;
		}
		if (ConstantName === new ControllerConstant().SelectHeroRight)
		{
			//SoundPlayPiano.PlaySound(MusicBibleConstant.Click);
			var buttonEvent = EventButton;


			window._battlePlanetModel._mapWorldModel.SelectHeroButton(buttonEvent);
			return;
		}
		if (ConstantName === new ControllerConstant().SelectHeroWithId)
		{
			
			window._battlePlanetModel._mapWorldModel.SelectHeroWithId(EventButton);
			return;
		}
		if(ConstantName === new ControllerConstant().RefreshHeroPower){
			window._battlePlanetModel._mapWorldModel.RefreshHeroPower();
			return;
		}
		if(ConstantName === new ControllerConstant().GotoCreateTactic){
			window._battlePlanetModel._mapWorldModel.GotoCreateTacticStart(EventButton);
			return;
		}

	};
	SetCommandPerform = function(CommandId,commandStrategy)
	{
		
		window._battlePlanetModel._mapWorldModel.PickUpCommandCaptureIsland(CommandId,commandStrategy);
	};
}