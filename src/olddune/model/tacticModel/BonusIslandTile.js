import {Point} from "../../modelStrategy/Point";

export class BonusIslandTile{
	GetBonusIsland = function(islandDemoMemento, NameHero, shipPlayer)
	{
		

		var playerIsland = window._battlePlanetModel.GetIslandWithGridFleet(islandDemoMemento.GetIslandArray(), NameHero);
		if (playerIsland != null)
		{
				
			return new Point(shipPlayer.Attack / 2, shipPlayer.Defence / 2);
		}
	
		return new Point(0, 0);
	}
}