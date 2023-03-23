namespace webapi
{
    public class Contact
    {
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public long CategoryId { get; set; }
        public ContactCategory Category { get; set; }
        public long? SubcategoryId { get; set; }
        public ContactSubcategory? Subcategory { get; set; }
        public string PhoneNumber { get; set; }
        public DateOnly DateOfBirth { get; set; }
    }
}
