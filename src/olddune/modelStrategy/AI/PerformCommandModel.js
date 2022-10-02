import {CommandStrategy} from "../CommandStrategy";
import {ModelStrategy} from "../ModelStrategy";



export class PerformCommandModel
{
	PerformCommand=function(commandStrategy)
	{

		if (commandStrategy.NameCommand == CommandStrategy.Type.CaptureIsland)
		{

			let island = window._mapWorldModel._islandDemoMemento.GetIslandWithId(commandStrategy.CaptureIsland.Id);
			island.FlagId = commandStrategy.CaptureIsland.FlagId;

			this.SetTurnDoneAndPower(commandStrategy.GetGridFleet());
			// money?
			ModelStrategy.SetPrizeIsland(window._battlePlanetModel.DispositionCountry_ar, commandStrategy.CaptureIsland.FlagId);
		}
	}
	PerformCommandMoveFleet=function( prototypeHeroDemo, commandStrategy)
	{
		if (commandStrategy.GridFleet != null)
		{

			let gridFleet = prototypeHeroDemo.GetFleetWithId(commandStrategy.GetGridFleet().GetId());
			
			if (gridFleet != null)
			{
				gridFleet.SpotX = commandStrategy.GridFleetNewPoint.X;
				gridFleet.SpotY = commandStrategy.GridFleetNewPoint.Y;
			
				this.SetTurnDoneAndPower(gridFleet);
				//gridFleet.
				// command player
				if (gridFleet.GetFlagId() === window._battlePlanetModel.FlagIdHero)
				{
                    
					gridFleet.PowerReserveChange(-99);
				}
			}
		}
	}
	SetTurnDoneAndPower=function(gridFleet)
	{
        console.log("000 gridFleet = "+gridFleet);
		gridFleet.SetTurnDone(true);
		gridFleet.PowerReserveChange(-1);
	}
}
