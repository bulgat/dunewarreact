using DuneWarLastFantasy.Models.other;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DuneWarLastFantasy.Models.duneWar
{
    [Table("TypeProduct", Schema = "DuneWar")]
    public partial class TypeProduct
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
    }
}
