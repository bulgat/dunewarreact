import {ButtonEvent} from "../model/ButtonEvent";

export class AgentEvent{
	CommandStrategy_ar;
	constructor(heroPlayer,
			gridFleet,
			MoveAI, LongRange,CommandStrategy_ar)
	{
		let buttonEvent = new ButtonEvent();

		if (heroPlayer!=undefined){
			buttonEvent.SpotX = heroPlayer.SpotX;
			buttonEvent.SpotY = heroPlayer.SpotY;
			buttonEvent.IdHeroPlayer = heroPlayer.GetId();
		}
		if (gridFleet!=undefined){
			buttonEvent.IdHeroFiend = gridFleet.GetId();
		}

		buttonEvent.MoveAI = MoveAI;
		buttonEvent.LongRange = LongRange;
		buttonEvent.CommandStrategy_ar = CommandStrategy_ar;
		return buttonEvent;
	}
	
}