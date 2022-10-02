export class ListIsland{
	PrintIslandName = function(islandHero_ar)
	{
		islandHero_ar.forEach (function (island)
		{
			console.log("  Print name island = " + island.Name);
		});
	};
}