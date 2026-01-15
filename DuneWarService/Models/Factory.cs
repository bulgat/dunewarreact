using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DuneWarLastFantasy.Models;
[Table("Factory", Schema = "DuneWar")]
public partial class Factory
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
