using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class Score
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string Family { get; set; } = null!;

    public string? Description { get; set; }

    public bool Record { get; set; }
}
