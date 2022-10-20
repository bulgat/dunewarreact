import {Point} from "./Point";
import {ModelStrategy} from "./ModelStrategy";

export class AI_Behavior_Existence{
	
	//wallObstacleStatic = 2;
	wallObstacleStatic = 1;
	PreparationMap = function(
			GridTile_ar,
			NameHero_ar,
			FlagId,
			DispositionCountry_ar,
			StopFiendHero,
			Sea,
			Island_ar)
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

			console.log("NameHero_ar =",NameHero_ar)

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
			CreateMap_ar[3][4] =0;
			CreateMap_ar[4][4] =0;
			CreateMap_ar[5][4] =0;
			CreateMap_ar[6][4] =0;
			CreateMap_ar[7][4] =0;
			CreateMap_ar[8][4] =0;
			CreateMap_ar[9][4] =0;
		*/
		
		
		//this.PrintMap(GridTile_ar,CreateMap_ar);

	

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