
export class GridArmorScience 
{
	label = "Дубовые доски";
	data = 1;
	Item = 1;
	Cost = 1;
	Tonnage = 60;
	Level = 0;
	Armor = 20;
	Number = 1;
	 Thick = 100;
	Abv = "Дуб";
	BonusArmor = 1;
	PercentStudy = 0;
	AbstractCost = 0;
	AbstractBacklog = 100;
	Help = "Броня из множества дубовых досок, ненадежна против современной артиллерии и слишком тяжела, но дешевая.";
	//public var icon;

	GridArmorScience(
			_label,
			_Abv,
			_data,
			_Item,
			_Cost,
			_Tonnage,
			_Level,
			_Armor,
			_Number,
			_Thick,
			_BonusArmor,
			_PercentStudy,
			_AbstractCost,
			 _AbstractBacklog,
			_Help
	)
	{
		this.label = _label;
		this.ldata = _data;
		this.lItem = _Item;
		this.lCost = _Cost;
		this.lTonnage = _Tonnage;
		this.lLevel = _Level;
		this.lArmor = _Armor;
		this.lNumber = _Number;
		this.lThick = _Thick;
		this.lAbv = _Abv;
		this.lBonusArmor = _BonusArmor;
		this.lPercentStudy = _PercentStudy;
		this.lAbstractCost = _AbstractCost;
		this.lAbstractBacklog = _AbstractBacklog;
		this.lHelp = _Help;



	}
}
