namespace webapi
{
    public class ContactSubcategory
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long CategoryId { get; set; }
        public ContactCategory Category { get; set; }
    }
}
