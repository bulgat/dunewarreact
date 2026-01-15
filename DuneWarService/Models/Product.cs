using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DuneWarLastFantasy.Models;

[Table("Product", Schema = "DuneWar")]
public partial class Product
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int ArsenalId { get; set; }

    public int FactorioId { get; set; }

    public virtual Arsenal Arsenal { get; set; } = null!;

    public virtual Factory Factorio { get; set; } = null!;
}
