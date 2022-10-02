import {GridCrewScienceShip} from "./GridCrewScienceShip.js";

export class GridCrewScience extends GridCrewScienceShip{
	
	BonusAttack;
	BonusDefence;
	Attack;
	Defence;
	WidthUnit;
	HeightUnit;

	ScienceId;
	MinSpeed;
	Speed;
	TacticStopFire;
	StrategySpeed;
	SoundMusic;
	SoundMove;
	Cost = 1;
	LongRange;
	IdImage;
	Sea;
	
	constructor(idImage,
			attack,
			defence,
			bonusAttack,
			bonusDefence,
			widthUnit,
			heightUnit,

			scienceId,
			minSpeed,
			speed,
			strategSpeed,
			tacticStopFire,
			soundMusic,
			soundMove,
			longRange,
			cost,
			sea,
			idTypeShip){
				super();
		this.GridCrewScience(idImage,
			attack,
			defence,
			bonusAttack,
			bonusDefence,
			widthUnit,
			heightUnit,

			scienceId,
			minSpeed,
			speed,
			strategSpeed,
			tacticStopFire,
			soundMusic,
			soundMove,
			longRange,
			cost,
			sea,
			idTypeShip);
	} ;
	GridCrewScience = function(
			idImage,
			attack,
			defence,
			bonusAttack,
			bonusDefence,
			widthUnit,
			heightUnit,

			scienceId,
			minSpeed,
			speed,
			strategSpeed,
			tacticStopFire,
			soundMusic,
			soundMove,
			longRange,
			cost,
			sea,
			idTypeShip
			)
	{
		this.IdImage = idImage;
		this.Attack = attack;
		this.Defence = defence;
		this.BonusAttack = bonusAttack;
		this.BonusDefence = bonusDefence;
		this.WidthUnit = widthUnit;
		this.HeightUnit = heightUnit;
	
		this.ScienceId = scienceId;
		this.MinSpeed = minSpeed;
		this.Speed = speed;
		this.StrategySpeed = strategSpeed;
		this.TacticStopFire = tacticStopFire;
		this.SoundMusic = soundMusic;
		this.SoundMove = soundMove;
		this.LongRange = longRange;
		this.Cost = cost;


		this.Sea = sea;
		this.IdTypeShip = idTypeShip;
	};

}