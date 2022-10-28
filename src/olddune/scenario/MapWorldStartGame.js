import {BattlePlanetModel} from "../model/BattlePlanetModel";
import {InitGlobalParams} from "./InitGlobalParams";
import {GridScenario} from "./GridScenario";
import {MainFormat} from "../mapWorld/model/MainFormat";

export class MapWorldStartGame {
	StartGameFirstReset = function(VictoryScenario)
	{
		new BattlePlanetModel()._initGlobalParams = new InitGlobalParams();
		
		
		VictoryScenario.Scenario = new GridScenario();

		VictoryScenario.Scenario.Init();

	};
	StartGameChange = function(VictoryScenario)
	{
console.log("20600  Victory Dev  =" ,VictoryScenario )
		if (VictoryScenario.Dual)
		{
			// hak
			window.battlePlanetModel.VictoryScenario.ScenarioNumber = 0;
			VictoryScenario.Scenario = new GridScenario();
			VictoryScenario.Scenario.Init();
			window.battlePlanetModel.VictoryScenario.Dual = false;
			VictoryScenario.ReturnStart = true;

			window._mapWorldModel.SetStateGame(MainFormat.VICTORY_WIN);
			return false;
		}
		if (VictoryScenario.ScenarioNumber == 0)
		{
			this.StartGameFirstReset(VictoryScenario);
			//VictoryScenario.Scenario = new GridScenario();
			//VictoryScenario.Scenario.Init();
		}
		if (VictoryScenario.ScenarioNumber == 1)
		{
			//VictoryScenario.Scenario = new GridScenario1();
			//VictoryScenario.Scenario.Init();
		}
		if (VictoryScenario.ScenarioNumber == 2)
		{
			//VictoryScenario.Scenario = new GridScenario2();
			//VictoryScenario.Scenario.Init();
		}
		if (VictoryScenario.ScenarioNumber == 3)
		{
			//VictoryScenario.Scenario = new GridScenario3();
			//VictoryScenario.Scenario.Init();
		}

		// default
		if (VictoryScenario.ScenarioNumber > 3)
		{

			this.StartGameFirstReset(VictoryScenario);

			return true;
		}
		else
		{
			VictoryScenario.ReturnStart = false;
		}

		return false;
	};
}