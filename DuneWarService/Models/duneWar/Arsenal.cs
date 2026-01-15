using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace DuneWarLastFantasy.Models.other;
[Table("Arsenal", Schema = "DuneWar")]
public partial class Arsenal
{
    public int ID { get; set; }

    public string Name { get; set; } = null!;

    public int NumCannon { get; set; }
    [JsonIgnore]
    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
