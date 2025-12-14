import {MeleeUnitResult} from "./MeleeUnitResult.js";
import {Tactic} from "./Tactic.js";
import {ButtonEvent} from "../ButtonEvent.js";
import {Robot} from "./Robot.js";

export class MeleeShip{
	_heroFiend;
	_heroPlayer;

	_countFrame = 0;

	_shipOneNamePLayer;
	_shipOneNameFiend;

	_timeBattleCount = 99;

	_limitDeadUnit = 0;
	_countDeadUnit = 0;

	Launch = function(
		)
	{

		this._countFrame = 0;
		this._timeBattleCount = 0;
		//System.Random rnd = new System.Random();
		//this._limitDeadUnit = rnd.Next(9);
		this._limitDeadUnit = Math.floor(Math.random() * 9);
		this._countDeadUnit = 0;

	};
	EnterFrame = function()
	{
		this._countFrame++;
		this._timeBattleCount++;
		this.Stream_Run();
	};
	
	GetStreamRunFast = function(
			HeroFiend,
			HeroPlayer,
			ShipOneNamePLayer,
			ShipOneNameFiend,
			LimitDeadUnit,
			MoveAi,
			LongRange
			)
	{

		var unitResultTactic_ar = [];

		// get statistic dead unit fleetShip
		var deadIdUnit_ar = [];

		var count = 0;
		var CrewPLayer_ar = this.GetShipUnitLife(ShipOneNamePLayer.GetArmUnitArray(), deadIdUnit_ar);
		var CrewFiend_ar = this.GetShipUnitLife(ShipOneNameFiend.GetArmUnitArray(), deadIdUnit_ar);



		while (this.ShipUnitLife(CrewPLayer_ar, deadIdUnit_ar) && this.ShipUnitLife(CrewFiend_ar, deadIdUnit_ar))
		{

			if (count <= LimitDeadUnit)
			{

				CrewPLayer_ar = this.GetShipUnitLife(ShipOneNamePLayer.GetArmUnitArray(), deadIdUnit_ar);
				CrewFiend_ar = this.GetShipUnitLife(ShipOneNameFiend.GetArmUnitArray(), deadIdUnit_ar);


				let meleeUnitResult = new MeleeUnitResult();

				var unitResultTactic = meleeUnitResult.Add_Melee_Unit(
						window._battlePlanetModel.GetBasaPurchaseUnitScience(),
					HeroFiend, HeroPlayer,
					CrewPLayer_ar,
					CrewFiend_ar,
					MoveAi, LongRange,
					window._battlePlanetModel._mapWorldModel._islandDemoMemento);

				unitResultTactic_ar.push(unitResultTactic);
				deadIdUnit_ar.push(unitResultTactic.UnitIdDead);

				count++;
			}
			else
			{

				break;
			}
			/*
			if(count>20) {
				break;
			}
			*/
		}
		
		return unitResultTactic_ar;
	};
	ShipUnitLife = function(Crew_ar, DeadIdUnit_ar)
	{
		var CrewLife_ar = this.GetShipUnitLife(Crew_ar, DeadIdUnit_ar);

		if (CrewLife_ar.length > 0)
		{
			return true;
		}
		return false;
	};
	GetShipUnitLife = function( Crew_ar, DeadIdUnit_ar)
	{
		var CrewLife_ar = [];
		Crew_ar.forEach (function (armUnit)
		{
			var dead = false;
			DeadIdUnit_ar.forEach (function( id)
			{
				if (id == armUnit.Id)
				{

					dead = true;
				}
			});
			if (!dead)
			{
				CrewLife_ar.push(armUnit);
			}
		});

		return CrewLife_ar;
	}
	Stream_Run=function()
	{
		if (this._countFrame == 1)
		{
			console.log("!!!!! @@@_buttonEvent  " )
			var unitResultTactic = new MeleeUnitResult().Add_Melee_Unit(
					window._battlePlanetModel.GetBasaPurchaseUnitScience(),
					this._heroFiend, this._heroPlayer,
					this._shipOneNamePLayer.GetArmUnitArray(),
					this._shipOneNameFiend.GetArmUnitArray(),
					Tactic.GetTactic().MoveAI, Tactic.GetTactic().LongRange,
					window._battlePlanetModel._mapWorldModel._islandDemoMemento);
		}
		if (this._countFrame >= 25)
		{

			if (new Tactic().GetTactic().DeadPlayer)
			{

				this._shipOneNamePLayer.GetArmUnitArray().RemoveAt(Tactic.GetTactic().Select_Unit_Player);
			}
			else
			{
				this._shipOneNameFiend.GetArmUnitArray().RemoveAt(Tactic.GetTactic().Select_Unit_Fiend);
			}

			this._countDeadUnit++;
			if (this.ThereIdMeleeUnit(this._shipOneNamePLayer, this._shipOneNameFiend))
			{
				if (this._countDeadUnit >= this._limitDeadUnit)
				{

					var model = new ButtonEvent();
					model.MoveAI = Tactic.GetTactic().MoveAI;

					model.IdHero = -1;

					window._mapWorldModel.GotoStrateg(model);
				}
			}
			if (this.ThereIdMeleeUnit(this._shipOneNamePLayer, this._shipOneNameFiend))
			{

				this._countFrame = 0;

			}
			else
			{
				var model = this.SetEventEndTactic(this._shipOneNamePLayer, this._shipOneNameFiend);
				window._battlePlanetModel._mapWorldModel.GotoStrateg(model);


			}


		}
	}; 
	SetEventEndTactic = function(
			shipNamePlayer,
			shipNameFiend,tactic)
	{

		var buttonEventmodel = new ButtonEvent();
var IdHero;
		if (!new Robot().Yes_Refreshment(shipNamePlayer))
		{
			
			
			IdHero = tactic.GetTactic().GetPlayerFleet().GetId();
			
		}

		if (!new Robot().Yes_Refreshment(shipNameFiend))
		{

			IdHero = tactic.GetTactic().GetFiendFleet().GetId();
			
		}
		// not dead

buttonEventmodel.IdHero = IdHero;

		buttonEventmodel.MoveAI = tactic.GetTactic().MoveAI;

		return buttonEventmodel;
	};

	ThereIdMeleeUnit = function(shipPLayer, shipFiend)
	{
		if (new Robot().Yes_Refreshment(shipPLayer) && new Robot().Yes_Refreshment(shipFiend))
		{
			return true;
		}
		return false;
	}
}