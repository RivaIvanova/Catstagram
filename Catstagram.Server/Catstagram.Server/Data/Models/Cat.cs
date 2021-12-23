namespace Catstagram.Server.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    using static Validation.Cat;

    public class Cat
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(MAX_DESCRIPTION_LENGTH)]
        public string Description { get; set; }

        [Required]
        public string ImgeUrl { get; set; }

        [Required]
        public string UserId { get; set; }

        public User User { get; set; }
    }
}
