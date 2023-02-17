import {ShipCapsule} from "./ShipCapsule.js";
import {TimeSalvoConstant} from "../model/tacticModel/TimeSalvoConstant.js";
import {BuilderShipCustom} from "../model/tacticModel/BuilderShipCustom.js";

export class ArmUnitShip {
	
	
	
	Id = 0;
	HeartPowerState;
	HeartPower;
	CritDamage;
	ShipCapsuleList;
	SpeedSteam;
	Speed;
	SizeAim;
	FalconetSupply;
	CountCrew = 100;
	TypeShip;
	IdTypeShip;
	CapsuleItem_ar;
	Unit = 1;
	Sea;

	constructor() {
	};
	SetUnit = function(Value)
	{
		this.Unit = Value;
	};
	GetUnit = function()
	{
		return this.Unit;
	};
	GetTypeShip = function()
	{
		return this.TypeShip;
	};
	GetIdTypeShip = function()
	{
		return this.IdTypeShip;
	};
	SetCapsule = function(cannonAmmunition_ar, Level, id_ar)
	{
		var shipCapsuleList = [];
		//int[] id_ar = new int[] {0,0,0, 0,0,0, 0,1,0,0,0,0,1};
		//id_ar.forEach (function( item)
		for(let item in id_ar)
		{
			
			shipCapsuleList.push(new ShipCapsule(cannonAmmunition_ar, Level, item.CannonId));
		}
		this.ShipCapsuleList = shipCapsuleList;
	};
	SetShip = function(idTypeShip, idCustomTypeShip)
	{
		this.IdTypeShip = idTypeShip;
		this.TypeShip = "ship" + idTypeShip;

		var timeSalvoConstant = new TimeSalvoConstant();
		var cannonAmmunition_ar = timeSalvoConstant.GetCannonAmmunition();
		var Level = 20;
		var builderShipCustom = new BuilderShipCustom();
		this.CapsuleItem_ar = builderShipCustom.GetBuilderShipCustom(idCustomTypeShip);
		this.SetCapsule(cannonAmmunition_ar, 20, this.CapsuleItem_ar);

	};
	ShipStatusDead = function()
	{

		return this.HeartPower <= 0;
	};
	DamageTurn = function()
	{
		this.HeartPower -= this.CritDamage;

	}
	StunDamage = function(Damage)
	{
		this.HeartPower -= Math.Abs(Damage); 
		this.CritDamage += 1;
	};
	SalvoDamage = function(ImprintVolleyList)
	{
		var damageCount = 0;
		ImprintVolleyList.forEach (function (ImprintVolley )
		{
			if (ImprintVolley.AffectHit != null)
			{

				this.HeartPower -= ImprintVolley.AffectHit.OccurHit.Within;
				this.damageCount += ImprintVolley.AffectHit.OccurHit.Within;
				// set damage capsule.
				this.SetCapsuleDamage(ImprintVolley.AffectHit, ImprintVolley.AffectHit.Nature);

			}
		});

		return damageCount;
	};
	SetCapsuleDamage = function(AffectHit, Nature)
	{
		var count = 0;
		this.ShipCapsuleList.forEach (function (ShipCapsule)
		{
			if (AffectHit.CapsuleCount == count)
			{
				if (Nature.Pierce)
				{
					this.ShipCapsule.Damage = true;
					this.CritDamage += AffectHit.Nature.FlowValue;
					this.CountCrew -= AffectHit.Nature.Shrapnel;

				}
			}
			count++;
		});
	};
	
}