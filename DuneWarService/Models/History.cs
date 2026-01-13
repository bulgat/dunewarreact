using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class History
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int StoryId { get; set; }

    public string Description { get; set; } = null!;

    public virtual StoreHistory Story { get; set; } = null!;
}
