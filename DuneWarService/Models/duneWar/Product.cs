using DuneWarLastFantasy.Models.duneWar;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace DuneWarLastFantasy.Models.other;

[Table("Product", Schema = "DuneWar")]
public partial class Product
{
    [Key]
    public int ID { get; set; }

    public string Name { get; set; } = null!;
    [Column("ArsenalID")]
    public int ArsenalID { get; set; }
    [Column("FactorioID")]
    public int FactorioID { get; set; }
    [JsonIgnore]
    public virtual Arsenal Arsenal { get; set; } = null!;
    [JsonIgnore]
    public virtual Factory Factorio { get; set; } = null!;
    [ForeignKey("TypeProduct")]
    public int TypeProductId { get; set; }
    public virtual TypeProduct TypeProduct { get; set; }
}
