using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class DepoAssetRest
{
    public int Id { get; set; }

    public int? DataFileId { get; set; }

    public virtual DataFile? DataFile { get; set; }
}
