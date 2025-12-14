import {ArmUnitShip} from "./ArmUnitShip.js";

export class ArmUnit extends ArmUnitShip {
	
	_gridCrewScience;
	basaPurchaseUnitScience_ar;
	Name;
	Level;
	Attack;
	Defence;
	Speed = 1;
	SoundMusic;
	LongRange;
	Id;
	ViewArmUnit;
	GetIncrementUnitId;
	GetAttack = function() {
		return this.Attack;
	};
	GetDefence = function() {
		return this.Defence;
	};
	GetId = function() {
		return this.Id;
	};
	constructor(basaPurchaseUnitScience_ar, unitType, customShip,GetIncrementUnitId){
		super();
		this.GetIncrementUnitId = GetIncrementUnitId;

		this.basaPurchaseUnitScience_ar = basaPurchaseUnitScience_ar;
		this._gridCrewScience = basaPurchaseUnitScience_ar[unitType];

		this.Attack = basaPurchaseUnitScience_ar[unitType].Attack;
		this.Defence = basaPurchaseUnitScience_ar[unitType].Defence;
		this.Name = "pi_"+ basaPurchaseUnitScience_ar[unitType].SoundMusic;

		this.SetUnit(unitType);

		this.Id = GetIncrementUnitId();
		
		this.Speed = basaPurchaseUnitScience_ar[unitType].StrategySpeed;
		this.SoundMusic = basaPurchaseUnitScience_ar[unitType].SoundMusic;
		this.LongRange = basaPurchaseUnitScience_ar[unitType].LongRange;
		this.Sea = basaPurchaseUnitScience_ar[unitType].Sea;

		// ship sea
		if (basaPurchaseUnitScience_ar[unitType].Sea)
		{
			this.CritDamage = 0;
			this.HeartPowerState = 50;
			this.HeartPower = 50;
		
			this.SetShip(basaPurchaseUnitScience_ar[unitType].IdTypeShip, customShip);
		}
	};
	
	Copy = function()
	{
		var armUnit = new ArmUnit(this.basaPurchaseUnitScience_ar, this.GetUnit(), 0,this.GetIncrementUnitId);
		return armUnit;
	};
	GetUnitScience = function()
	{
		return this._gridCrewScience;
	};
	
}