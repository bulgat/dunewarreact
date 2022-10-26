import {ModelStrategy} from "../../modelStrategy/ModelStrategy"

export class ExecuteCommandStrateg {
	PerformCommand=function(commandStrategy)
	{
		new ModelStrategy().PerformCommand(commandStrategy);
	}
	PrototypeHeroCreateFleet=function(commandStrategy)
	{
		window._mapWorldModel._prototypeHeroDemo.GetHeroFleet().Add(commandStrategy.GetGridFleet());
	}
	PerformCommandMoveFleet=function(commandStrategy)
	{
		new ModelStrategy().PerformCommandMoveFleet(window._mapWorldModel._prototypeHeroDemo, commandStrategy);
	}
	PerformAttackFleet=function( commandStrategy,CountTurn, GlobalParamsGale)
	{
		
		//throw new Error("XXXXXXXXXXXXx");

		new ModelStrategy().PerformAttackFleetAction(window._mapWorldModel._prototypeHeroDemo, commandStrategy);


		// fiend attack
		if (commandStrategy.AttackPlayer)
		{
			// attack player
			commandStrategy.GridFleet.SpotX = commandStrategy.GridFleetOldPoint.X;
			commandStrategy.GridFleet.SpotY = commandStrategy.GridFleetOldPoint.Y;

			window._mapWorldModel.GotoCreateTactic(
					commandStrategy.GetGridFleet().GetId(),
					commandStrategy.GridFleetVictim.GetId(),
					false,
					commandStrategy.LongRange, CountTurn);

		}
		else
		{

//console.log("Execute  commandStrategy.GridFleet = "+commandStrategy.GridFleet)

			// attack fiend
			window._mapWorldModel.GotoCreateTactic(
					commandStrategy.GridFleetVictim.GetId(),
					commandStrategy.GetGridFleet().GetId(),
					true,
					commandStrategy.LongRange, CountTurn);

		}
	}
}