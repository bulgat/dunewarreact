export class CoordinateSearch{
	GetXmapNear = function () 
	{
		
		var  nearMap_ar = [];
		
		nearMap_ar.push([1,-1]);
		nearMap_ar.push([1,0]);
		nearMap_ar.push([1,1]);
		nearMap_ar.push([0,-1]);
	
		nearMap_ar.push([0,1]);
		nearMap_ar.push([-1,-1]);
		nearMap_ar.push([-1,0]);
		nearMap_ar.push([-1,1]);
		nearMap_ar.push([-2,2]);
		nearMap_ar.push([-1,2]);
		nearMap_ar.push([0,2]);
		nearMap_ar.push([1,2]);
		nearMap_ar.push([2,2]);
		nearMap_ar.push([2,1]);
		nearMap_ar.push([2,0]);
		nearMap_ar.push([2,-1]);
		nearMap_ar.push([2,-2]);
		nearMap_ar.push([1,-2]);
		nearMap_ar.push([0,-2]);
		nearMap_ar.push([-1,-2]);
		nearMap_ar.push([-2,-2]);
		nearMap_ar.push([-2,-1]);
		nearMap_ar.push([-2,0]);
		nearMap_ar.push([-2,1]);

		return nearMap_ar;
	} 
	GetMapFlagIslandArray = function()
	{
		var mapFlagIsland_ar = [];
		mapFlagIsland_ar.push([1, -1]);
		mapFlagIsland_ar.push([1, 0]);
		mapFlagIsland_ar.push([1, 1]);
		mapFlagIsland_ar.push([0, -1]);
		mapFlagIsland_ar.push([0, 1]);
		mapFlagIsland_ar.push([-1, -1]);
		mapFlagIsland_ar.push([-1, 0]);
		mapFlagIsland_ar.push([-1, 1]);
		mapFlagIsland_ar.push([1, 1]);

		return mapFlagIsland_ar;
	}
	GetXmapNearCenter = function()
	{
		var mapFlagIsland_ar = [];
		mapFlagIsland_ar.push([0, 0]);

		return mapFlagIsland_ar;
	}
}