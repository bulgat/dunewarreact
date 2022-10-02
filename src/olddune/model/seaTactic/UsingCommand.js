import {CommandStrategy} from "../../modelStrategy/CommandStrategy";
import {ExecuteCommandStrateg} from "../../model/seaTactic/ExecuteCommandStrateg";

export class UsingCommand{
	PickUpCommandCaptureIsland = function(
		   execComNull,
		   _commandStrategy_ar,
		    Id,
			 CountTurn,
			  GlobalParamsGale,
			  commandStrategy)
	{
		//let executeCommand = new ExecuteCommandStrateg();

		//console.log(executeCommand+"  0001===="+executeCommand instanceof ExecuteCommandStrateg);
		/*
		if(executeCommand instanceof ExecuteCommandStrateg){
			console.error("Not Class ExecuteCommandStrateg");
			return;
		}
*/
		var commandStrategyRemove = null;
		if (_commandStrategy_ar !== null)
		{


			var countIndex =0;
			_commandStrategy_ar.forEach (function( commandStrategy)
			{
console.log("Use Command ["+commandStrategy.GridFleet+" ]  ")
				if (commandStrategy.Id === Id)
				{


if (commandStrategy.NameCommand === new CommandStrategy().EnumType("CaptureIsland"))
					{

						new ExecuteCommandStrateg().PerformCommand(commandStrategy);
					}
					if (commandStrategy.NameCommand === new CommandStrategy().EnumType("CreateFleet"))
					{

						new ExecuteCommandStrateg().PrototypeHeroCreateFleet(commandStrategy);
					}
					// move fleet.
					if (commandStrategy.NameCommand === new CommandStrategy().EnumType("MoveFleet"))
					{

						console.log("0000======== )");
						new ExecuteCommandStrateg().PerformCommandMoveFleet(commandStrategy);
					}
					if (commandStrategy.NameCommand === new CommandStrategy().EnumType("AttackFleet"))
					{

						new ExecuteCommandStrateg().PerformAttackFleet(commandStrategy, CountTurn, GlobalParamsGale);

					}
					commandStrategyRemove = commandStrategy;
				}
				countIndex++;
			});
			//_commandStrategy_ar.Remove(commandStrategyRemove);
			_commandStrategy_ar.slice(countIndex,1);
		}


		return _commandStrategy_ar;
	}
}
