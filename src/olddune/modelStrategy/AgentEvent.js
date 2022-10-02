import {ButtonEvent} from "../model/ButtonEvent";

export class AgentEvent{
	CommandStrategy_ar;
	GetButtonEventModelMeeleeFleet = function(heroPlayer,
			gridFleet,
			MoveAI, LongRange,CommandStrategy_ar)
	{
		var buttonEvent = new ButtonEvent();
		buttonEvent.SpotX = heroPlayer.SpotX;
		buttonEvent.SpotY = heroPlayer.SpotY;

		buttonEvent.IdHeroFiend = gridFleet.GetId();
		buttonEvent.IdHeroPlayer = heroPlayer.GetId();
		buttonEvent.MoveAI = MoveAI;
		buttonEvent.LongRange = LongRange;
		buttonEvent.CommandStrategy_ar = CommandStrategy_ar;
		return buttonEvent;
	}
	
}