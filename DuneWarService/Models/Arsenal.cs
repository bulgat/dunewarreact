using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DuneWarLastFantasy.Models;
[Table("Arsenal", Schema = "DuneWar")]
public partial class Arsenal
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int NumCannon { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
