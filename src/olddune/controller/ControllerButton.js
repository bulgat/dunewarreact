import {ControllerConstant} from "./ControllerConstant.js";

export class ControllerButton{
	EventCall = function(ConstantName, ModelName, EventButton)
	{
		if (ConstantName == new ControllerConstant().PathHero)
		{
			//var buttonEvent = EventButton;

			window._mapWorldModel.GotoHero(EventButton);
			return;
		}
		if (ConstantName == new ControllerConstant().AttackHero)
		{

			//ButtonEvent buttonEvent = (ButtonEvent)EventButton;

			window._mapWorldModel.AttackHero(EventButton);
			return;
		}
		if (ConstantName == new ControllerConstant().SelectHeroLeft)
		{
			//SoundPlayPiano.PlaySound(MusicBibleConstant.Click);
			var buttonEvent = EventButton;


			window._mapWorldModel.SelectHeroButton(buttonEvent);
			return;
		}
		if (ConstantName == new ControllerConstant().SelectHeroRight)
		{
			//SoundPlayPiano.PlaySound(MusicBibleConstant.Click);
			var buttonEvent = EventButton;


			window._mapWorldModel.SelectHeroButton(buttonEvent);
			return;
		}
	};
	SetCommandPerform = function(CommandId,commandStrategy)
	{
		
		window._mapWorldModel.PickUpCommandCaptureIsland(CommandId,commandStrategy);
	};
}