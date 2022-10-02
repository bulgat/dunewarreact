import {Robot} from "./Robot";
import {BonusIslandTile} from "./BonusIslandTile";
import {NameHero} from "../../modelStrategy/NameHero";
import {RobotResultMelee} from "./RobotResultMelee";

export class RobotExistence{
	Auto_Existense =function(
			HeroGridFiend,
			shipFiend,
			Unit_Fiend,
			NameHeroGrid,
			shipPlayer,
			Unit_Player,
			TypeIsland,
			MoveAi,
			islandDemoMemento
		)
	{
// исключить HeroGridFiend    
// исключить NameHeroGrid




		if (Unit_Fiend == null || Unit_Player == null)
		{
			throw console.error("Error! Not Unit! units fiends =  " + Unit_Fiend + " and player = " + Unit_Player);

		}

		if (this.GetErrorRobot(Unit_Fiend, Unit_Player))
		{
			throw console.error("ErrorRobot");

		}



		var TehPlayer = 0;
		var MaterielFiend = 0;
		
		if (this.GetAttackPlayer(MoveAi))
		{


			if (new Robot().BonusShipIsland(shipFiend,
				shipPlayer,
				TypeIsland))
			{

				console.log("RobotExistence     shipFiend = "+shipFiend)

				MaterielFiend = this.AllDefence(Unit_Fiend, shipFiend.GetDefence()
						, 0
						+ new BonusIslandTile().GetBonusIsland(islandDemoMemento, HeroGridFiend, Unit_Fiend).Y);



				TehPlayer = this.AllAttack(Unit_Player,
				shipPlayer.Attack,
				(NameHeroGrid.Attack+ new BonusIslandTile().GetBonusIsland(islandDemoMemento, NameHeroGrid, Unit_Player).X));
			
			
			
			
			}
			else
			{
				//island
				MaterielFiend = Unit_Fiend.Defence + shipFiend.Defence + HeroGridFiend.LandDefence;

				TehPlayer = Unit_Player.Attack + shipPlayer.LandAttack + NameHeroGrid.Attack;


			}

		}
		else
		{

			if (new Robot().BonusShipIsland(shipFiend,
				shipPlayer,
				TypeIsland))
			{
				

				MaterielFiend = this.AllAttack(Unit_Fiend, shipFiend.Attack,
					HeroGridFiend.Attack
						+ new BonusIslandTile().GetBonusIsland(islandDemoMemento, HeroGridFiend, Unit_Fiend).X);

						

				TehPlayer = this.AllDefence(Unit_Player, shipPlayer.GetDefence(), NameHeroGrid.Defence
						+ new BonusIslandTile().GetBonusIsland(islandDemoMemento, NameHeroGrid, Unit_Player).Y);

			}
			else
			{
				//island
				MaterielFiend = Unit_Fiend.Attack + shipFiend.GetDefence() + HeroGridFiend.LandAttack;
				TehPlayer = Unit_Player.GetDefence() + shipPlayer.LandDefence + NameHeroGrid.Defence;

			}

		}


		

		//var rand = new System.Random();
		

		// Count result attack/defence.
		var resultMelee = new RobotResultMelee();
			
		//resultMelee.Player_Melee = UnityEngine.Random.Range(0,TehPlayer);
		//resultMelee.Fiend_Melee = UnityEngine.Random.Range(0,MaterielFiend);
resultMelee.Player_Melee = Math.floor(Math.random() * TehPlayer);
		resultMelee.Fiend_Melee = Math.floor(Math.random() * MaterielFiend);
		
		

		resultMelee.PlayerMeleeFull = TehPlayer;
		resultMelee.FiendMeleeFull = MaterielFiend;
		resultMelee.Existense = resultMelee.Player_Melee - resultMelee.Fiend_Melee;
		resultMelee.Player_Attack = this.GetAttackPlayer(MoveAi);
		
		
		
		return resultMelee;

	};
	GetErrorRobot = function(Unit_Fiend, Unit_Player)
	{
		if (Unit_Fiend == null || Unit_Player == null)
		{
			//System.out.println("Error! Not Unit! units fiends =  " + Unit_Fiend + " and player = " + Unit_Player);
			return true;
		}
		return false;
	};

	GetAttackPlayer = function(MoveAi)
	{
		return (MoveAi == false);
	};
	GetCrewLongRangeArray = function(Crew_ar)
	{
		var CrewLongRange_ar = [];
		Crew_ar.forEach (function (armUnit)
		{
			if (armUnit.LongRange)
			{
				CrewLongRange_ar.Add(armUnit);
			}
		});
		return CrewLongRange_ar;
	};
	AllAttack = function(Unit, ShipAttack, HeroAttack)
	{
		
		
		var TehPlayer = parseInt(Unit.Attack)
				+ parseInt(ShipAttack);
				//+ parseInt(HeroAttack);
				
		return TehPlayer;
	};
	AllDefence = function(Unit, ShipDefence,HeroDefence)
	{
		var MaterielFiend = Unit.Attack 
				+ ShipDefence + HeroDefence;
		return MaterielFiend;
	};
}