using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DuneWarLastFantasy.Models;

public partial class Standard
{
    public int StandardId { get; set; }
    [NotMapped]
    public virtual ICollection<Student> StudentCurrentStandards { get; set; } = new List<Student>();
    [NotMapped]
    public virtual ICollection<Student> StudentPreviousStandards { get; set; } = new List<Student>();
}
