import {ArmUnitShip} from "./ArmUnitShip.js";
import { BasaPurchaseUnitScienceHelp } from "./BasaPurchaseUnitScienceHelp.js";

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

	constructor(basaPurchaseUnitScience_ar, customShip,GetIncrementUnitId, NameUnitType){
		super();
		this.GetIncrementUnitId = GetIncrementUnitId;

		this.basaPurchaseUnitScience_ar = basaPurchaseUnitScience_ar;
		let name = NameUnitType//new BasaPurchaseUnitScienceHelp().ConvertIdInName(unitType,basaPurchaseUnitScience_ar)
		let unitScience = new BasaPurchaseUnitScienceHelp().GetUnitType(name,basaPurchaseUnitScience_ar)


		this._gridCrewScience = unitScience;

		this.Attack = unitScience.Attack;
		this.Defence = unitScience.Defence;
		this.Name = name;
	
		this.SetUnit(unitScience.IdImage);

		
		this.Id = GetIncrementUnitId();
		
		
		this.Speed = unitScience.StrategySpeed;
		this.SoundMusic = unitScience.SoundMusic;
		this.LongRange = unitScience.LongRange;
		this.Sea = unitScience.Sea;

		this.TypeShip = unitScience.IdImageType		;
		this.IdTypeShip= unitScience.IdImageType		;


		// ship sea
		if (unitScience.Sea)
		{
			this.CritDamage = 0;
			this.HeartPowerState = 50;
			this.HeartPower = 50;
		
			this.SetShip(unitScience.IdTypeShip, customShip);
		}
	};
	RefreshSpeed=function(){
		this.Speed =1;
	}
	GetUnit = function()
	{
		return this.TypeShip;
	};
	GetAttack = function() {
		return this.Attack;
	};
	GetDefence = function() {
		return this.Defence;
	};
	GetId = function() {
		return this.Id;
	};
	
	
	Copy = function()
	{
		var armUnit = new ArmUnit(this.basaPurchaseUnitScience_ar, 0,this.GetIncrementUnitId, this.Name);
		return armUnit;
	};
	GetUnitScience = function()
	{
		return this._gridCrewScience;
	};
	
}