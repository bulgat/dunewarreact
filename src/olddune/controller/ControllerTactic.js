import { ControllerTacticConstant } from "./ControllerTacticConstant";
import { Tactic } from "../model/tacticModel/Tactic";

export class ControllerTactic {
    _tactic=null;
    TacticEventCall = function(ConstantName, EventButton)
	{
        if (ConstantName === new ControllerTacticConstant().StartBattleTactic)
		{
            console.log("0111 start  x    dexIm  = ",EventButton )
            this._tactic = new Tactic(
                EventButton.FleetFiend,
                EventButton.FleetPlayer,
                EventButton.MoveAI,
                EventButton.LongRange);
        }
        if (ConstantName === new ControllerTacticConstant().EndBattleTactic)
		{
            console.log("0112 end     x    dexIm  = ",EventButton )
        }
       if(ConstantName===new ControllerTacticConstant().MeleeShipReleaseDead){

            window._battlePlanetModel._mapWorldModel.MeleeShipReleaseDead(EventButton) ;
       }
       if(ConstantName===new ControllerTacticConstant().BasicStopBattleVictory){

             window._battlePlanetModel._mapWorldModel.BasicStopBattleVictory(EventButton) ;
        }
        //BasicStopBattleVictory
    }
    GetTacticModel = function(){
        return this._tactic;
    }
}