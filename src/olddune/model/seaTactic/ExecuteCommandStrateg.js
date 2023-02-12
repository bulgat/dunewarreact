import {ModelStrategy} from "../../modelStrategy/ModelStrategy"

export class ExecuteCommandStrateg {
	PerformCommand=function(commandStrategy)
	{
		new ModelStrategy().PerformCommand(commandStrategy);
	}
	PrototypeHeroCreateFleet=function(commandStrategy)
	{
		window._battlePlanetModel._mapWorldModel._prototypeHeroDemo.GetHeroFleet().Add(commandStrategy.GetGridFleet());
	}
	PerformCommandMoveFleet=function(commandStrategy)
	{
		
		new ModelStrategy().PerformCommandMoveFleet(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo, commandStrategy);
	}
	PerformAttackFleet=function( commandStrategy,CountTurn)
	{
		
		//throw new Error("XXXXXXXXXXXXx");

		new ModelStrategy().PerformAttackFleetAction(window._battlePlanetModel._mapWorldModel._prototypeHeroDemo, commandStrategy);


		// fiend attack
		if (commandStrategy.AttackPlayer)
		{
			console.log("2051 Execu  commandStrategy  = ",commandStrategy)
			// attack player
			commandStrategy.GetGridFleet().SpotX = commandStrategy.GridFleetOldPoint.X;
			commandStrategy.GetGridFleet().SpotY = commandStrategy.GridFleetOldPoint.Y;


			window._battlePlanetModel._mapWorldModel.GotoCreateTactic(
					commandStrategy.GetGridFleet().GetId(),
					commandStrategy.GridFleetVictim.GetId(),
					false,
					commandStrategy.LongRange, CountTurn);

		}
		else
		{


			console.log("2052  DDDD    ");
			// attack fiend
			window._battlePlanetModel._mapWorldModel.GotoCreateTactic(
					commandStrategy.GridFleetVictim.GetId(),
					commandStrategy.GetGridFleet().GetId(),
					true,
					commandStrategy.LongRange, CountTurn);

		}
	}
}