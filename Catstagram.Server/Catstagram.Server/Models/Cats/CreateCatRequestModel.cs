namespace Catstagram.Server.Models.Cats
{
    using System.ComponentModel.DataAnnotations;

    using static Data.Validation.Cat;

    public class CreateCatRequestModel
    {
        [Required]
        [MaxLength(MAX_DESCRIPTION_LENGTH)]
        public string Description { get; set; }

        [Required]
        public string ImageUrl { get; set; }
    }
}
