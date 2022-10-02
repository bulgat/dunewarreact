export class UnitResultTactic{
	constructor(
			attackPlayer,
	deadPlayer,
	unitIdWin,
	unitIdDead,
	unitWinPsevdo,
	unitDeadPsevdo,
	existense,
			crewPLayer_ar,
			crewFiend_ar,
			unitPlayer,
			unitFiend,
			playerMeleeFull,
			fiendMeleeFull,
			blockDead,
			Salvo,
			ImprintVolleyList
			)
	{
		this.AttackPlayer = attackPlayer;
		this.DeadPlayer = deadPlayer;
		this.UnitIdWin = unitIdWin;
		this.UnitIdDead = unitIdDead;
		this.UnitWinPsevdo = unitWinPsevdo;
		this.UnitDeadPsevdo = unitDeadPsevdo;

		this.Existense = existense;
		this.CrewFPlayer_ar = crewPLayer_ar;
		this.CrewFiend_ar = crewFiend_ar;
		this.UnitPlayer = unitPlayer;
		this.UnitFiend = unitFiend;
		this.PlayerMeleeFull = playerMeleeFull;
		this.FiendMeleeFull = fiendMeleeFull;
		this.BlockDead = blockDead;
		this.Salvo = Salvo;
		this.ImprintVolleyList = ImprintVolleyList;
	};

	AttackPlayer;
	DeadPlayer;
	UnitIdWin;
	UnitIdDead;
	UnitWinPsevdo;
	UnitDeadPsevdo;

	UnitPlayer;
	UnitFiend;

	Existense;
	Select_Unit_Player;
	Select_Unit_Fiend;
	CrewFPlayer_ar;
	CrewFiend_ar;
	PlayerMeleeFull;
	FiendMeleeFull;
	BlockDead;

	// salvo.
	Salvo;
	ImprintVolleyList;
}