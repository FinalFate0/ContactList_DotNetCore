using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace webapi
{
    public class ContactsDatabaseContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=Contacts.db;");
        }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<ContactCategory> Categories { get; set; }
        public DbSet<ContactSubcategory> Subcategories { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContactCategory>().HasData(
                new ContactCategory() { Id = 1, Name = "Private"},
                new ContactCategory() { Id = 2, Name = "Business" },
                new ContactCategory() { Id = 3, Name = "Other" }
                );

            modelBuilder.Entity<ContactSubcategory>().Property(b => b.CategoryId)
                .HasDefaultValue(2);

            modelBuilder.Entity<ContactSubcategory>().HasData(
                new ContactSubcategory() { Id = 1, Name = "CEO" },
                new ContactSubcategory() { Id = 2, Name = "Client" }
                );

            modelBuilder.Entity<Contact>().HasData(
                new Contact()
                {
                    Id = 1,
                    FirstName = "John",
                    LastName = "Smith",
                    Email = "johnsmith@email.xyz",
                    Password = "password",
                    CategoryId = 1,
                    PhoneNumber = "111222333",
                    DateOfBirth = new DateOnly(1989, 1, 1)
                });
        }
    }
}
