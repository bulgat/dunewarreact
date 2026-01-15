using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DuneWarLastFantasy.Models.other;
[Table("Factory", Schema = "DuneWar")]
public partial class Factory
{
    public int ID { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
