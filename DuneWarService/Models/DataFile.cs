using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class DataFile
{
    public int Id { get; set; }

    public virtual ICollection<DepoAssetRest> DepoAssetRests { get; set; } = new List<DepoAssetRest>();
}
