export class ShipUnit{
	Crew_ar;
	TypeShip = 0;
	Attack = 0;
	Defence = 0;
	LandAttack = 0;
	LandDefence = 0;
	constructor()
	{
		this.Crew_ar = [];
	};
	ShipUnit = function()
	{
		this.Crew_ar = [];
	};
	GetTypeShip = function()
	{
		return this.TypeShip;
	};
	GetFirstUnit = function()
	{
		return this.Crew_ar[0];
	};
	GetDefence = function()
	{
		return this.Defence;
	};

	
	

	SetArmUnitArray = function(crew_ar)
	{
		this.Crew_ar = crew_ar;
	};
	GetArmUnitArray = function()
	{
		return this.Crew_ar;
	};
	RemoveUnit = function(index)
	{
		this.Crew_ar.RemoveAt(index);
	};
	Copy = function()
	{
		var shipUnitCopy = new ShipUnit();
		shipUnitCopy.Crew_ar = [];
		this.Crew_ar.forEach (function (armUnit)
		{
			shipUnitCopy.Crew_ar.push(armUnit.Copy());
		});

		return shipUnitCopy;
	};
}