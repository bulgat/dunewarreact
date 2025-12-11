import {ContactState} from "./ContactState.js";


export class ContactStateProceeding{
	InitContact = function(DispositionCountry_ar)
	{

		DispositionCountry_ar.forEach (function(country)
		{
			country.Contact_ar = [];

			DispositionCountry_ar.forEach (function( enemyCountry)
			{
				if (country.IdCountry != enemyCountry.IdCountry)
				{
					country.Contact_ar.push(new ContactState(enemyCountry.IdCountry, true));
				}
			});

		});
	};
	SetContactPeace = function(DispositionCountry_ar,
			flagIdPoint, Peace)
	{

		var contactState_ar = this.GetContactArray(DispositionCountry_ar, flagIdPoint);
		
		
		contactState_ar.forEach (function( contactState )
		{
			
			contactState.Peace = Peace;
		});
	};
	GetContactArray = function(DispositionCountry_ar, flagIdPoint)
	{
		
		var flagId_ar = [flagIdPoint.X, flagIdPoint.Y ];
		var contactState_ar = [];
		for (var i = 0; i < flagId_ar.length; i++)
		{

			var country = this.GetDispositionCountry(DispositionCountry_ar,
					flagId_ar[i]);



			if (country != null)
			{

				country.Contact_ar.forEach (function( contactState)
				{

					for (var z = 0; z < flagId_ar.length; z++)
					{
						if (contactState.flagId == flagId_ar[z])
						{

							contactState_ar.push(contactState);
						}
					}

				});
			}

		}
		return contactState_ar;
	};

	GetDispositionCountry = function(DispositionCountry_ar,
			flagId)
	{
		var flagCountry=null;
		DispositionCountry_ar.forEach (function(country )
		{
			
			if (country.IdCountry == flagId)
			{
				
				flagCountry = country;
				return country;
				
			}
		});
		return flagCountry;
	}
	GetPlayerCountryFollow = function(DispositionCountry_ar,
			flagId)
	{
		var flagCountry=null;
		DispositionCountry_ar.forEach (function( country )
		{
			if (country.PlayerControl == true)
			{
				if (country.IdCountry != flagId)
				{
					flagCountry = country;
					return country;
				}
			}
		});
		return flagCountry;
	}
	GetContactPeace = function(DispositionCountry_ar,
			flagIdPoint)
	{
		var flagCountry=false;
		var contactState_ar = this.GetContactArray(DispositionCountry_ar, flagIdPoint);
		contactState_ar.forEach (function( contactState)
		{
			if (contactState.Peace)
			{
				flagCountry = true;
				return true;
			};
		});

		return flagCountry;
	}

	
	ContactGlobalPeace = function(Country)
	{
		
		var flagCountry=true;
		Country.Contact_ar.forEach (function(contactState)
		{
				
			if (contactState.Peace == false)
			{
				
				flagCountry = false;
				return false;
			}
		});
		return flagCountry;
	}
	
}