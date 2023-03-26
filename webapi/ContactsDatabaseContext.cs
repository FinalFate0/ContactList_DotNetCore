using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using webapi.Models;

namespace webapi
{
    public class ContactsDatabaseContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=Contacts.db;");
        }
        public DbSet<Contact> Contacts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Contact>()
                .HasIndex(u => u.Email)
                .IsUnique();

            modelBuilder.Entity<Contact>().HasData(
                new Contact()
                {
                    Id = 1,
                    FirstName = "John",
                    LastName = "Smith",
                    Email = "johnsmith@email.xyz",
                    Password = "password1",
                    PhoneNumber = "111222333",
                    DateOfBirth = new DateOnly(1989, 1, 1)
                }, new Contact()
                {
                    Id = 2,
                    FirstName = "Shell",
                    LastName = "Kim",
                    Email = "shellkim@email.xyz",
                    Password = "password2",
                    PhoneNumber = "123456789",
                    DateOfBirth = new DateOnly(1991, 8, 10)
                }
                );
        }
    }
}
