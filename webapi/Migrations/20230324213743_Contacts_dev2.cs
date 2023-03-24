using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Migrations
{
    /// <inheritdoc />
    public partial class Contacts_dev2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Contacts",
                keyColumn: "Id",
                keyValue: 1L,
                column: "Password",
                value: "password1");

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "CategoryId", "DateOfBirth", "Email", "FirstName", "LastName", "Password", "PhoneNumber", "SubcategoryId" },
                values: new object[] { 2L, 2L, new DateOnly(1991, 8, 10), "shellkim@email.xyz", "Shell", "Kim", "password2", "123456789", 1L });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "Id",
                keyValue: 2L);

            migrationBuilder.UpdateData(
                table: "Contacts",
                keyColumn: "Id",
                keyValue: 1L,
                column: "Password",
                value: "password");
        }
    }
}
