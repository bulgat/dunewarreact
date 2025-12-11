import {BasicTile} from "./BasicTile.js";
import {GraficBibleConstant} from '../GraficConstant/GraficBibleConstant'

export class Island extends BasicTile {
	Name;
	Race;
	Castle;
	FlagId;
	Id;
	Image;

	constructor(name, spotX, spotY, race, castle, flagId)
	{
		super(spotX, spotY);
		this.Name = name;
		this.SpotX = spotX;
		this.SpotY = spotY;
		this.Race = race;
		this.Castle = castle;
		this.FlagId = flagId;
		console.log("0111 ???????? fiendHero =",race)
		this.Image = new GraficBibleConstant().town_ar[race]
		console.log("0112 ???????? eroPoint =",this.Image)
	};
	GetCopy = function()
	{
		return new Island(this.Name, this.SpotX, this.SpotY, this.Race, this.Castle, this.FlagId);
	};
	GetFlagId = function() {
		return this.FlagId;
	};


}