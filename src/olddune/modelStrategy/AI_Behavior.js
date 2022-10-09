import {Point} from "./Point.js";
import {GridFleet} from "./GridFleet.js";
import {SearchImminenFleet} from "./SearchImminenFleet.js";
import {AI_TacticSearch} from "./AI_TacticSearch.js";



export class AI_Behavior{
	_test = null;
	TacticSearchIslandAndHero = function (PrototypeHeroDemo_ar,NameHero,Grid_ar){
		
		
		NameHero.x = NameHero.SpotX;
		NameHero.y = NameHero.SpotY;
		
		// search near hero
		var aI_TacticSearch = new AI_TacticSearch()
		var pointGrab =aI_TacticSearch.GetNearTacticHero(PrototypeHeroDemo_ar,NameHero);



		if(pointGrab!=null)
		{

			var resultPoint=this.GetPathPoint(new Point(NameHero.x,NameHero.y), pointGrab,Grid_ar);
			if (resultPoint!=null)
			{
				
				return new Point(resultPoint.X,resultPoint.Y);
			}
		}
		
		
			
			
		if (pointGrab==null)
		{
			//var nameHero = new GridFleet(X, Y, FlagId,Type);
			
			var gridFleet = new GridFleet(NameHero.x,NameHero.y,NameHero.GetFlagId(),NameHero.type);
			var searchImminenFleet = new SearchImminenFleet();
			
				
				
			let fiendHeroPoint = searchImminenFleet.SearchImminenHeroGlob(PrototypeHeroDemo_ar, gridFleet, null, Grid_ar);
			
			
			if (fiendHeroPoint!=null)
			{
				
				var resultPoint=this.GetPathPoint(new Point(NameHero.x,NameHero.y),fiendHeroPoint,Grid_ar);
				
				
				if (resultPoint!=null){
					
					return resultPoint;
				}
				//return new Point(resultPoint.X,resultPoint.Y);
			}
			
		}
			

		return null;
	};
	
	Get2Dgrid = function() {
		var Grid2d_ar = [
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0]
		];
		return Grid2d_ar;
		
	};
	
	GetPathPoint = function GetPathPoint(pointAim, FiendPoint,Grid_ar) 
	{
		//covert 1d in 2d massiv
		//Grid2d_ar =[];
		var Grid2d_ar =this.Get2Dgrid();
		/*
		var Grid2d_ar = [
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0],
			[0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0, 0,0,0,0,0]
		];
		*/
		
		var resultPoint=null;
		
		
		
		var pathBasa_ar =this.GetFindPathBigArray(pointAim, FiendPoint,null,null,Grid2d_ar);
	
		if(pathBasa_ar.length>=2) 
		{
					resultPoint = new Point(pathBasa_ar[1][0],pathBasa_ar[1][1]);
				
		}

		return resultPoint;
	};
	GetFindPathBigArray = function(pointAim, FiendPoint,FiendFlagId,
				NameHero_ar,Grid_ar) {
 
		
		///////////pathfinding-browser
		/*
		for(var i=0;i<3;i++){
			console.log(i+"  Te KOL");
		}
		*/
		
		
		
		//var matrix = [
		//	[0, 0, 0, 1, 0],
		//	[1, 0, 0, 0, 1],
		//	[0, 0, 1, 0, 0],
		//];
		var PF = require('pathfinding');
		var grid = new PF.Grid(Grid_ar);


		var finder = new PF.AStarFinder({
			allowDiagonal: true,
			dontCrossCorners: true,
			heuristic: PF.Heuristic.chebyshev
		});
		var start = [pointAim.X,pointAim.Y];
		var end = [FiendPoint.X,FiendPoint.Y];

		//console.log("Path: x= " + start[0]+" y = "+ start[1]+" end = "+ end[0], end[1], grid+"  Grid_ar="+Grid_ar[0].length);
		if(start[0]>=Grid_ar.length || start[1]>=Grid_ar[0].length){
			console.error("Big X");
			//return [];
		}
//console.log( start[0]+" = "+start[1]+" SS "+end[0]+" SS "+end[1]+" =  " + grid);
		var path = finder.findPath(start[0], start[1], end[0], end[1], grid);
		
		for (var i = 0; i < path.length; i++)
		{
			//console.log("Path: " + i + ", X: " + path[i][0] + ", Y: " + path[i][1]+"   path L= "+path.length);
		}
		
	
		
		return path;

	};
	
}