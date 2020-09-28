using Microsoft.EntityFrameworkCore.Migrations;

namespace MusicApp.Migrations
{
    public partial class AddDataSeeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Musicians",
                columns: new[] { "Id", "Age", "CareerStartYear", "Genre", "Name" },
                values: new object[] { 1, 27, 2006, "pop", "Edward Sheeran" });

            migrationBuilder.InsertData(
                table: "Albums",
                columns: new[] { "Id", "MusicianId", "Name", "ReleaseYear" },
                values: new object[] { 1, 1, "Plus", 2011 });

            migrationBuilder.InsertData(
                table: "Albums",
                columns: new[] { "Id", "MusicianId", "Name", "ReleaseYear" },
                values: new object[] { 2, 1, "Multiply", 2014 });

            migrationBuilder.InsertData(
                table: "Albums",
                columns: new[] { "Id", "MusicianId", "Name", "ReleaseYear" },
                values: new object[] { 3, 1, "Divide", 2017 });

            migrationBuilder.InsertData(
                table: "Tracks",
                columns: new[] { "Id", "AlbumId", "Duration", "IsFavorite", "IsListened", "Name", "Rating" },
                values: new object[,]
                {
                    { 1, 1, "04:18", false, false, "The A Team", 0 },
                    { 2, 1, "03:20", false, false, "Drunk", 0 },
                    { 3, 1, "03:48", false, false, "U.N.I.", 0 },
                    { 4, 1, "02:59", false, false, "Grade 8", 0 },
                    { 5, 2, "04:13", false, false, "One", 0 },
                    { 6, 2, "04:06", false, false, "I'm a Mess", 0 },
                    { 7, 2, "03:43", false, false, "Nina", 0 },
                    { 8, 2, "04:17", false, false, "Photograph", 0 },
                    { 9, 3, "03:47", false, false, "Erazer", 0 },
                    { 10, 3, "04:21", false, false, "Castle on the Hill", 0 },
                    { 11, 3, "03:58", false, false, "Dive", 0 },
                    { 12, 3, "03:53", false, false, "Shape of You", 0 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Tracks",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Albums",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Musicians",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
