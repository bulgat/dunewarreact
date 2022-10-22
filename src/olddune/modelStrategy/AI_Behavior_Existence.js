import {Point} from "./Point";
import {ModelStrategy} from "./ModelStrategy";

export class AI_Behavior_Existence{
	
	//wallObstacleStatic = 2;
	wallObstacleStatic = 1;
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
		//Препятствия где?

		return Grid2d_ar;
		
	};
	


	PreparationMap = function(
			GridTile_ar,
			NameHero_ar,
			FlagId,
			DispositionCountry_ar,
			StopFiendHero,
			Sea,
			Island_ar,
			ClearHeroPoint)
	{

		
		var wallObstacle_ar = null;
		if (Sea)
		{
			wallObstacle_ar = [ 0, 1, window._battlePlanetModel.ObstacleRoadMap, window._battlePlanetModel.ObstacleMap ];



		}
		else
		{
			// obstacle = 2
			wallObstacle_ar = [ window._battlePlanetModel.ObstacleMap, window._battlePlanetModel.ObstacleSeaMap ];
		}
		// obstacle = 2
		//var costGround = 1;
		let costGround = 0;

		var CreateMap_ar = [[]];
//var GridRow = 0;
		for (var GridRow = 0; GridRow < (GridTile_ar[GridTile_ar.length - 1].SpotX + 1); GridRow++)
		{

			var arrayLong = [GridTile_ar[GridTile_ar.length - 1].SpotY + 1];

			CreateMap_ar.push(arrayLong);
			for (var GridLine = 0; GridLine < GridTile_ar[GridTile_ar.length - 1].SpotY + 1; GridLine++)
			{

				CreateMap_ar[GridRow][GridLine] = costGround;
				var oneGrid = this.GetOneGrid(GridTile_ar, GridRow, GridLine);


				for (var QuadObstacle = 0; QuadObstacle < wallObstacle_ar.Length; QuadObstacle++)
				{
					if (oneGrid.Terrain == wallObstacle_ar[QuadObstacle])
					{
						CreateMap_ar[GridRow][GridLine] = this.wallObstacleStatic;
						console.log(GridRow,"  war  rn  point = " ,GridLine)
					}
				}


			}

		}
		
		
		//let wallObstacleStatic =this.wallObstacleStatic;
		
		// set allow visit.
		/*
		Island_ar.forEach (function (island)
		{
			
			CreateMap_ar[island.SpotX][island.SpotY] = 0;
		});
		*/

		console.log("00000  war   NameHero   CreateMap_ar = ",CreateMap_ar);
		//throw new Error("ffffffff")
		for(let island of Island_ar){
			CreateMap_ar[island.SpotX][island.SpotY] = 0;
		}

		console.log("00001  war   NameHero   CreateMap_ar = ",CreateMap_ar);
		if (StopFiendHero)
		{
			/*
			NameHero_ar.forEach (function (hero)
			{
				
				
				CreateMap_ar[hero.SpotX][hero.SpotY] = wallObstacleStatic;
			});
			*/

			for(let hero of NameHero_ar){
				CreateMap_ar[hero.SpotX][hero.SpotY] = this.wallObstacleStatic;
			}


		}
		else
		{

			

			for(let hero of NameHero_ar){
				
				if (hero.GetFlagId() === FlagId)
				{
					CreateMap_ar[hero.SpotX][hero.SpotY] = this.wallObstacleStatic;
				
				}
				else
				{
				
					if (new ModelStrategy().GetContactPeace(DispositionCountry_ar, new Point(hero.GetFlagId(), FlagId)))
					{
						CreateMap_ar[hero.SpotX][hero.SpotY] = this.wallObstacleStatic;
					}
				}
			}
			/*
			NameHero_ar.forEach (function (hero)
			{
				if (hero.GetFlagId() == FlagId)
				{
					CreateMap_ar[hero.SpotX][hero.SpotY] = this.wallObstacleStatic;
				
				}
				else
				{
				
					if (new ModelStrategy().GetContactPeace(DispositionCountry_ar, new Point(hero.GetFlagId(), FlagId)))
					{
						CreateMap_ar[hero.SpotX][hero.SpotY] = this.wallObstacleStatic;
					}
				}

			});
			*/
		}
/*
			CreateMap_ar[3][2] =1;
			CreateMap_ar[4][2] =1;
			CreateMap_ar[5][2] =1;
			CreateMap_ar[6][2] =1;
			CreateMap_ar[7][2] =1;
			CreateMap_ar[8][2] =1;
			CreateMap_ar[9][2] =1;
		
			CreateMap_ar[3][0] =1;
			CreateMap_ar[4][0] =1;
			CreateMap_ar[5][0] =1;
			CreateMap_ar[6][0] =1;
			CreateMap_ar[7][0] =1;
			CreateMap_ar[8][0] =1;
			CreateMap_ar[9][0] =1;
			*/
		
		if (ClearHeroPoint !=undefined){
			console.log("00002  ClearHeroPoint ",ClearHeroPoint)
			CreateMap_ar[ClearHeroPoint.X][ClearHeroPoint.Y] =0;
		}
		
		//this.PrintMap(GridTile_ar,CreateMap_ar);

		//CreateMap_ar = this.Get2Dgrid()
		console.log("00003 NameHero  CreateMap_ar  =",CreateMap_ar)

		return CreateMap_ar;
	};
	
	AllowPointMap = function(ShoalSeaBasa_ar, point)
	{
		if (point.X < 0 || point.Y < 0)
		{
			return false;
		}
		if (point.X >= ShoalSeaBasa_ar.length || point.Y >= ShoalSeaBasa_ar[0].length)
		{
			return false;
		}
		return true;
	};
	GetOneGrid = function( Grid_ar,  GridRow,  GridLine)
	{
		return Grid_ar[GridRow * (Grid_ar[Grid_ar.length - 1].SpotX + 1) + GridLine];
	};
}