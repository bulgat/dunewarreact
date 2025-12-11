export class ShipCapsule{
	ShipCapsule = function(cannonAmmunition_ar, Level, idCannon)
	{
		this.Board = 4;
		this.Armor = 0;
		if (idCannon >= 1)
		{
			//this.ShipCannon = new ShipCannon(GetCannon(cannonAmmunition_ar, idCannon - 1), Level);

		}

	};
	GetCannon = function(cannonAmmunition_ar, idCannon)
	{
		cannonAmmunition_ar.forEach (function (cannonAmmunition )
		{
			if (cannonAmmunition.Num == idCannon)
			{
				return cannonAmmunition;
			}
		});
		return null;
	};

	Board;
	Armor;
	ArmorBoard;
	WaterLine;
	Damage;
	GoalSurge;
	ShipCannon;
}