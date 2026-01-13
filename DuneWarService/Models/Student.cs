using System;
using System.Collections.Generic;

namespace DuneWarLastFantasy.Models;

public partial class Student
{
    public int StudentId { get; set; }

    public string Name { get; set; } = null!;

    public int? CurrentStandardId { get; set; }

    public int? PreviousStandardId { get; set; }

    public virtual ICollection<Achievement> Achievements { get; set; } = new List<Achievement>();

    public virtual Standard? CurrentStandard { get; set; }

    public virtual Standard? PreviousStandard { get; set; }
}
