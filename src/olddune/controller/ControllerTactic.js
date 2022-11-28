import { ControllerTacticConstant } from "./ControllerTacticConstant";
import { Tactic } from "../model/tacticModel/Tactic";

export class ControllerTactic {
    _tactic=null;
    static _CallBackEndBattle;
    constructor(CallBackEndBattle){
        if (CallBackEndBattle!=undefined){
            ControllerTactic._callBackEndBattle = CallBackEndBattle;
        }
        console.log("88999 D  Ur  =  " ,CallBackEndBattle )
        console.log("89000  estClick Map  = ",ControllerTactic._callBackEndBattle );
    }

    TacticEventCall = function(ConstantName, EventButton)
	{
        if (ConstantName === new ControllerTacticConstant().StartBattleTactic)
		{
            
            this._tactic = new Tactic(
                EventButton.FleetFiend,
                EventButton.FleetPlayer,
                EventButton.MoveAI,
                EventButton.LongRange);
        }
        if (ConstantName === new ControllerTacticConstant().EndBattleTactic)
		{
            
            window._battlePlanetModel._mapWorldModel.EndBattleTactic(EventButton);
            ControllerTactic._callBackEndBattle();
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