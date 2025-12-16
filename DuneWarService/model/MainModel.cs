namespace DuneWarLastFantasy.model
{
    public class MainModel
    {
        public MainModel() { }

        public static List<GridCrewScience> InitBasaPurchaseUnitScience_ar = new List<GridCrewScience>()
        {
            new GridCrewScience()
            {
                Id =1,
                Attack = 20,
                Defence =20, 
                BonusAttack = 1,
                BonusDefence = 1,
                StrategSpeed = 2,
                LongRange = false,
                Name = "средний танк",
                UrlImage = "/imageDune/unit/tank.jpg"
            },
            new GridCrewScience()
            {
                Id =2,
                Attack = 30,
                Defence =30,
                BonusAttack = 2,
                BonusDefence = 2,
                StrategSpeed = 2,
                LongRange = false,
                Name = "осадный танк",
                UrlImage = "/imageDune/unit/siegeTank.jpg"
            },
            new GridCrewScience()
            {
                Id =3,
                Attack = 10,
                Defence =10,
                BonusAttack = 1,
                BonusDefence = 1,
                StrategSpeed = 1,
                LongRange = false,
                Name = "пехота",
                UrlImage = "/imageDune/unit/soldier.jpg"
            },
            new GridCrewScience()
            {
                Id =4,
                Attack = 10,
                Defence =10,
                BonusAttack = 1,
                BonusDefence = 1,
                StrategSpeed = 3,
                LongRange = false,
                Name = "багги",
                UrlImage = "/imageDune/unit/baggy.jpg"
            },
            new GridCrewScience()
            {
                Id =5,
                Attack = 10,
                Defence =10,
                BonusAttack = 1,
                BonusDefence = 1,
                StrategSpeed = 2,
                LongRange = true,
                Name = "ракетный танк",
                UrlImage = "/imageDune/unit/rocketTank.jpg"
            },
            new GridCrewScience()
            {
                Id =6,
                Attack = 65,
                Defence =30,
                BonusAttack = 2,
                BonusDefence = 2,
                StrategSpeed = 2,
                LongRange = false,
                Name = "амфибия",
                UrlImage = "/imageDune/unit/top.png"
            },
            new GridCrewScience()
            {
                Id =7,
                Attack = 65,
                Defence =30,
                BonusAttack = 2,
                BonusDefence = 2,
                StrategSpeed = 2,
                LongRange = false,
                Name = "самолет",
                UrlImage = "/imageDune/unit/top.png"
            },
        };
 
    }
}
