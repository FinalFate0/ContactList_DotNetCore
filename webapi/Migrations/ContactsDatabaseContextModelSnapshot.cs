﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webapi;

#nullable disable

namespace webapi.Migrations
{
    [DbContext(typeof(ContactsDatabaseContext))]
    partial class ContactsDatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.4");

            modelBuilder.Entity("webapi.Models.Contact", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("DateOfBirth")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Contacts");

                    b.HasData(
                        new
                        {
                            Id = 1L,
                            DateOfBirth = new DateOnly(1989, 1, 1),
                            Email = "johnsmith@email.xyz",
                            FirstName = "John",
                            LastName = "Smith",
                            Password = "password1",
                            PhoneNumber = "111222333"
                        },
                        new
                        {
                            Id = 2L,
                            DateOfBirth = new DateOnly(1991, 8, 10),
                            Email = "shellkim@email.xyz",
                            FirstName = "Shell",
                            LastName = "Kim",
                            Password = "password2",
                            PhoneNumber = "123456789"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
