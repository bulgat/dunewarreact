using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class StoreHistory
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Description { get; set; } = null!;

    public int AddressId { get; set; }

    public string AddressName { get; set; } = null!;

    public virtual ICollection<History> Histories { get; set; } = new List<History>();
}
