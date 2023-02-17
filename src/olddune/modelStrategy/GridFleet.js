import {BasicTile} from "./BasicTile.js";
import {ShipUnit} from "./ShipUnit.js";
import {ArmUnit} from "./ArmUnit.js";
import { BasaPurchaseUnitScienceHelp } from "./BasaPurchaseUnitScienceHelp.js";

export class GridFleet extends BasicTile {
	FlagId=0;
	SpotX = 0;
	SpotY = 0;
	Id=0;
	Speed = 1;
	ShipNameUnit =[];
	type =0;
	StaticLongRange =0;
	PowerReserve = 1;
	maxSpeed = 1;
	AttackDone=false;
	TurnDone = false;
	NameUnit;
	GetIncrementUnitId;
	BasaPurchaseUnitScience_ar;
	constructor(x,y,flagId,BasaPurchaseUnitScience_ar,GetIncrementUnitId,NameType) {

		super(x,y);
		this.GetIncrementUnitId = GetIncrementUnitId;
		this.BasaPurchaseUnitScience_ar = BasaPurchaseUnitScience_ar;
		this.SpotX =x;
		this.SpotY =y;
		this.FlagId = flagId;
		this.ShipNameUnit = new ShipUnit();

		
		this.Id = GetIncrementUnitId();
		this.NameUnit = NameType;
		//let nameUnit =new BasaPurchaseUnitScienceHelp().ConvertIdInName(Type,BasaPurchaseUnitScience_ar)
		
		let typeUnit = new BasaPurchaseUnitScienceHelp().GetUnitType(this.NameUnit,BasaPurchaseUnitScience_ar)
		//this.type = Type;
		
		
		this.type = typeUnit.IdImageType;
		this.Type = typeUnit.IdImageType;


		this.ShipNameUnit.SetArmUnitArray(
		[new ArmUnit(BasaPurchaseUnitScience_ar, null,GetIncrementUnitId,this.NameUnit),
		new ArmUnit(BasaPurchaseUnitScience_ar, null,GetIncrementUnitId,this.NameUnit),
		new ArmUnit(BasaPurchaseUnitScience_ar, null,GetIncrementUnitId,this.NameUnit),
		new ArmUnit(BasaPurchaseUnitScience_ar, null,GetIncrementUnitId,this.NameUnit),
		new ArmUnit(BasaPurchaseUnitScience_ar, null,GetIncrementUnitId,this.NameUnit),
		new ArmUnit(BasaPurchaseUnitScience_ar, null,GetIncrementUnitId,this.NameUnit)
		]
		);

	};
	GetType(){
		return this.type;
	}
	SetPoint = function(X,Y) {
		this.SpotX =X;
		this.SpotY =Y;
		this.x=X;
		this.y=Y;
		this.tileTo = [X,Y];

	};


	GetId = function(){
		return this.Id;
	};
	GetRange = function(){
		//var maxSpeed = 999;
		if (this.StaticLongRange)
		{
			return true;
		}
			let returnRange = false;
			this.ShipNameUnit.GetArmUnitArray().forEach (function (armUnit)
			{

				if (armUnit.LongRange == true)
				{
					if (returnRange == false ){
						returnRange = true;
					}
					return true;
				}
			});

		return returnRange;
	};
	SetPowerReserve = function() {
		this.PowerReserve = this.GetSpeed();
	};
	SetNullPowerReserve = function() {
		this.ShipNameUnit.GetArmUnitArray().forEach (function(armUnit)
		{
				armUnit.Speed =0;
		});
		//this.maxSpeed = 0;
		this.PowerReserve =0;
	}
	GetPowerReserve = function() {
		return this.PowerReserve;
	};



	GetFlagId = function () {
		return this.FlagId;
	};
	GetSpeedStatic = function()
	{
		return this.Speed;
	};
	RefreshSpeed()	{
		this.Speed =this.maxSpeed ;
		for(let armUnit of this.ShipNameUnit.GetArmUnitArray()){
			armUnit.RefreshSpeed();
		}
	}
	GetSpeed= function(){



		if (this.ShipNameUnit.GetArmUnitArray()==undefined) {
			return 1;
		}
		if (this.ShipNameUnit.GetArmUnitArray().length==0){
			console.error("count arm in fleet L = "+this.ShipNameUnit.GetArmUnitArray().length);
			return 1;
		}
		let localMaxSpeed = this.maxSpeed ;

		

		this.ShipNameUnit.GetArmUnitArray().forEach (function(armUnit)
		{

			

			if (armUnit.Speed < localMaxSpeed)
			{
				localMaxSpeed = armUnit.Speed;
			}
		});
		//this.maxSpeed = localMaxSpeed;
		
		return this.maxSpeed;

	};
	
	GetSea = function()
	{
		var sea = false;
		if (this.ShipNameUnit.GetArmUnitArray()==undefined) {
			return false;
		}
		this.ShipNameUnit.GetArmUnitArray().forEach (function (armUnit)
		{
			if (armUnit.Sea)
			{
				return true;
			}
		});

		return false;
	};
	SetAttackDone = function(attackDone)
	{
		this.AttackDone = attackDone;
	}
	GetAttackDone = function()
	{
		return this.AttackDone;
	};
	AddShipName = function(shipUnit)
	{
		this.ShipNameUnit =shipUnit;
	};
	SetId = function(fleetId)
	{
		this.FleetId = fleetId;
	};
	GetShipNameFirst = function()
	{

		return this.ShipNameUnit;
	};
	GetShipName = function()
	{
		return this.ShipNameUnit;
	};
	GetCountUnitArm = function()
	{

		return this.ShipNameUnit.GetArmUnitArray().length;
	};
	GetFirstArmUnit(){
		return this.ShipNameUnit.GetArmUnitArray()[0];
	}
	SetTurnDone = function(turnDone)
	{
		this.TurnDone = turnDone;
	};
	GetTurnDone = function()
	{
		return this.TurnDone;
	};
	PowerReserveChange(num)
	{
		this.PowerReserve += num;
	}
	Copy = function()
	{
		//var fleetCopy = new GridFleet(this.Name, this.SpotX, this.SpotY, this.FlagId, this.Image);

		let fleetCopy = new GridFleet(this.SpotX, this.SpotY, this.FlagId,//this.type,
			this.BasaPurchaseUnitScience_ar,this.GetIncrementUnitId,this.NameUnit);
		fleetCopy.Id = this.Id;
		fleetCopy.ShipNameUnit = new ShipUnit();

	  fleetCopy.ShipNameUnit = this.ShipNameUnit.Copy();

		fleetCopy.FleetId = this.FleetId;
		fleetCopy.FlagId = this.FlagId;
		fleetCopy.Image = this.Image;
		fleetCopy.Strateg_Memory_BasaSpotX = this.Strateg_Memory_BasaSpotX;
		fleetCopy.Strateg_Memory_BasaSpotY = this.Strateg_Memory_BasaSpotY;
		fleetCopy.PowerReserve = this.PowerReserve;
		fleetCopy.Speed = this.Speed;
		fleetCopy.AimPeaceCaravan = this.AimPeaceCaravan;
		fleetCopy.TurnDone = this.TurnDone;
		fleetCopy.AttackDone = this.AttackDone;
		fleetCopy.StaticLongRange = this.StaticLongRange;

		return fleetCopy;
	};
}
