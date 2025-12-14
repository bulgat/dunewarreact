import {FunctionShare} from "../../modelStrategy/FunctionShare.js";
import {ArmUnit} from "../../modelStrategy/ArmUnit.js";

export class Robot {
	SelectUnitPlayerRandom = function(Crew_ar)
	{

		//var rand = new System.Random();
		//var order = rand.Next(Crew_ar.Count);

var order =Math.floor(Math.random() * Crew_ar.length);

		return order;
	};
	
	BonusShipIsland = function(FiendShip, PlayerShip, TypeIsland)
	{
		if (FiendShip.GetTypeShip() == TypeIsland
			|| PlayerShip.GetTypeShip() == TypeIsland)
		{
			return false;
		}
		else
		{
			return true;
		}

	};
    Yes_Refreshment = function(shipName)
	{


		if (shipName != null)
		{
			if (shipName.GetArmUnitArray() != null)
			{
				
				if (shipName.GetArmUnitArray().length > 0)
				{
					return true;
				}
			}

		}
		return false;

	};

	GetShip = function(Fleet)
	{
		return Fleet.GetShipName();
	};
	GetUnit = function(Crew_ar, SelectUnit)
	{
		if (Crew_ar.length <= SelectUnit)
		{
			console.error("error GetUnit() size=" + Crew_ar.Count + " SelectUnit= " + SelectUnit);
		}
		return Crew_ar[SelectUnit];
	};
	DeadUnit = function(
			UnitIdDead,
			UnitIdWin,
			  BasaPurchaseUnitScience_ar,
			  CrewPLayer,
			  CrewFiend
	)
	{
		var basaUnitFiendDead_ar = [];
		

		

		//dead
		var index = this.GetIndexUnit(CrewPLayer, UnitIdDead);
		
		if (index != -1)
		{

			basaUnitFiendDead_ar.push(CrewPLayer[index]);

		
			//CrewPLayer.splice(index,1);
			this.SpliceArm(CrewPLayer,index);
		}
		else
		{

			index = this.GetIndexUnit(CrewFiend, UnitIdDead);
			
			if (index != -1)
			{
				basaUnitFiendDead_ar.push(CrewFiend[index]);

	
				//CrewFiend.splice(index,1);
				this.SpliceArm(CrewFiend,index);
			}
			else
			{
				//System.out.println("Error id player Win? =" + UnitIdDead);
			}
		}

		//win
		if (UnitIdWin != 0)
		{
			var indexWin = this.GetIndexUnit(CrewPLayer, UnitIdWin);

			if (indexWin != -1)
			{

				new FunctionShare().Add_Level_Unit(CrewPLayer[indexWin], BasaPurchaseUnitScience_ar);
			}
			else
			{
				var indexFiend = this.GetIndexUnit(CrewFiend, UnitIdWin);
				if (indexFiend != -1)
				{
					new FunctionShare().Add_Level_Unit(CrewFiend[indexFiend], BasaPurchaseUnitScience_ar);
				}
				else
				{
					//System.out.println("Error id fiend Win? =" + indexFiend);
				}
			}
		}
		
		return basaUnitFiendDead_ar;

	};
	SpliceArm = function(CrewFiend,index) {
		
		CrewFiend.splice(index,1);
	};
	RemoveUnitId = function(CrewFiend_ar, UnitId)
	{
		var index = this.GetIndexUnit(CrewFiend_ar, UnitId);
		var armUnit = CrewFiend_ar[index];
		CrewFiend_ar.RemoveAt(index);
		return armUnit;
	};
	GetIndexUnit = function(CrewFiend_ar, UnitId)
	{
		var index = 0;
		var returnIndex = -1;
		CrewFiend_ar.forEach (function (armUnit )
		{
			
			if (armUnit.Id == UnitId)
			{
				returnIndex = index;
				//return index;
			}
			index++;
		});
		return returnIndex;
	};
}