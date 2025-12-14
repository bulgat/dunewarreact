import { Point } from "./Point.js";
import { AI_move } from "./AI_move.js";
import { AI_TacticSearch } from "./AI_TacticSearch.js";
import { CommandStrategy } from "./CommandStrategy.js";
import { FiendFleet } from "./FiendFleet.js";
import { AttackMoveFleet } from "./AI/AttackMoveFleet";
import { SelectHeroMap } from "./SelectHeroMap";



export class MendMoveShip {

	PlaceFiendX = function (
		NameHeroFleet,
		PrototypeHeroDemo_ar,
		Grid_ar,
		Island_ar,
		DispositionCountryNameHero_ar,
		CommandStrategy_ar,
		Null,
		Null0,
		Null1,
		NameHero_ar,Sea,
		BasaPurchaseUnitScience_ar,GetIncrementUnitId
	) {
		var aI_move = new AI_move();
		//Operate   
		var point = aI_move.Operate(PrototypeHeroDemo_ar, NameHeroFleet, Grid_ar,
			DispositionCountryNameHero_ar,Sea,Island_ar,BasaPurchaseUnitScience_ar,GetIncrementUnitId
			);

		

		let fleetVictim;
		if (point != null) {

			fleetVictim = this.GetFleetVictim(NameHeroFleet.FlagId,PrototypeHeroDemo_ar, point);
			var gridFleetOldPoint = new Point(NameHeroFleet.SpotX, NameHeroFleet.SpotY);

			

			if (fleetVictim != null) {
				var commandStrAttack = this.GetCommandAttackFleet(NameHeroFleet, point, NameHeroFleet, fleetVictim);


				CommandStrategy_ar.push(commandStrAttack);

				// get firstfleet.
				return this.GetAttackMoveFleet(fleetVictim, false, null);

			}
			else {
				//move fleet
				var commandStr = this.GetCommandMoveFleet(NameHeroFleet, point, NameHeroFleet);
				CommandStrategy_ar.push(commandStr);
			}
		}
		//attack fleet is neighborn
		fleetVictim = null;
		var aI_TacticSearch = new AI_TacticSearch()
		var pointLongRange = aI_TacticSearch.GetNearTacticHero(PrototypeHeroDemo_ar, NameHeroFleet);

		if (pointLongRange == null) {

			return null;
		}

		var commandAttack = this.GetFleetVictimSpecial(NameHeroFleet, pointLongRange, PrototypeHeroDemo_ar);

		if (commandAttack != null) {

			fleetVictim = commandAttack.GridFleetVictim;
			CommandStrategy_ar.push(commandAttack);
		}
		return CommandStrategy_ar;
	};
	GetCommandMoveFleet = function (GridFleetOldPoint, ResultPoint, GridFleet) {
		let commandStrategy = new CommandStrategy();

		commandStrategy.GridFleetNewPoint = new Point(ResultPoint.X, ResultPoint.Y);
		commandStrategy.SetGridFleet(GridFleet);
		commandStrategy.NameCommand = commandStrategy.EnumType("MoveFleet");
		commandStrategy.Id = window._idCommand;
		window._idCommand++;
		return commandStrategy;

		return commandStrategy;
	};

	GetCommandAttackFleet = function (GridFleetOldPoint, ResultPoint, GridFleet, fleetVictim) {

		if (Array.isArray(GridFleet)) {
			console.error("Is Array! Not class GridFleet!")
			throw new Error("Is Array! Not class GridFleet!");
		}

		let commandStrategy = new CommandStrategy();

		commandStrategy.GridFleetNewPoint = new Point(ResultPoint.X, ResultPoint.Y);
		commandStrategy.SetGridFleet(GridFleet);
		commandStrategy.GridFleetVictim = fleetVictim;
		commandStrategy.NameCommand = commandStrategy.EnumType("AttackFleet");
		commandStrategy.Id = window._idCommand;
		window.AbortController_idCommand++;
		return commandStrategy;

		return commandStrategy;
	};


	GetFleetVictimSpecial = function (GridFleet, ResultPoint, NameHero_ar) {
		var selectHeroMap = new SelectHeroMap();
		// поиск цели
		var fleetVictim = selectHeroMap.PuttingShadeAttack(NameHero_ar, GridFleet);


		if (fleetVictim != null) {
			var commandStrategy = new CommandStrategy();

			commandStrategy.GridFleetOldPoint = new Point(ResultPoint.X, ResultPoint.Y);
			commandStrategy.GridFleetNewPoint = new Point(GridFleet.SpotX, GridFleet.SpotY);
			commandStrategy.SetGridFleet(GridFleet);
			commandStrategy.GridFleetVictim = fleetVictim;
			commandStrategy.NameCommand = commandStrategy.EnumType("AttackFleet");
			commandStrategy.Id = window._idCommand;
			window._idCommand++;
			return commandStrategy;
		}
		return null;
	};


	GetAttackMoveFleet = function (fleetVictim,
		LongRange, PlacePredator) {
		var attackMoveFleet = new AttackMoveFleet();
		if (fleetVictim == null) {
			//throw new Exception("error GetAttackMoveFleet() fleetVictim == null");
		}
		attackMoveFleet.Fleet = fleetVictim;
		attackMoveFleet.LongRange = LongRange;
		if (PlacePredator != null) {
			attackMoveFleet.PlacePredator = PlacePredator;
		}
		return attackMoveFleet;
	}
	GetFleetVictim = function (HeroFleetFlagId,NameHero_ar, resultPoint) {
		let hereinHero_ar =
			new FiendFleet().HeroAllCoordinateCoincidence(
				resultPoint.X,
				resultPoint.Y, NameHero_ar);
		if (hereinHero_ar.length > 0) {
			for(let victimFleet of hereinHero_ar){
				//block attack самого себя
				if(HeroFleetFlagId!=victimFleet.FlagId){
					return victimFleet
				}
			}

		}
		return null;
	}
}