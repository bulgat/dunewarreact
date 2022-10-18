export class BasicTactic {
	heroFiend;
	heroPlayer;
	SelectShipFiend = 0;
	SelectShipPlayer = 0;

	constructor(){
		
	};
	GetFiendFleet = function()
	{
		return this.heroFiend;
	};
	SetFiendFleet = function(gridFleet)
	{
		this.heroFiend = gridFleet;
	};
	GetPlayerFleet = function()
	{
		return this.heroPlayer;
	};
	SetPlayerFleet = function(gridFleet)
	{
		this.heroPlayer = gridFleet;
	};
	
	
}