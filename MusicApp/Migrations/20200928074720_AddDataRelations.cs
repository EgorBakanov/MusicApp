using Microsoft.EntityFrameworkCore.Migrations;

namespace MusicApp.Migrations
{
    public partial class AddDataRelations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AlbumId",
                table: "Tracks",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MusicianId",
                table: "Albums",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Tracks_AlbumId",
                table: "Tracks",
                column: "AlbumId");

            migrationBuilder.CreateIndex(
                name: "IX_Albums_MusicianId",
                table: "Albums",
                column: "MusicianId");

            migrationBuilder.AddForeignKey(
                name: "FK_Albums_Musicians_MusicianId",
                table: "Albums",
                column: "MusicianId",
                principalTable: "Musicians",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tracks_Albums_AlbumId",
                table: "Tracks",
                column: "AlbumId",
                principalTable: "Albums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Albums_Musicians_MusicianId",
                table: "Albums");

            migrationBuilder.DropForeignKey(
                name: "FK_Tracks_Albums_AlbumId",
                table: "Tracks");

            migrationBuilder.DropIndex(
                name: "IX_Tracks_AlbumId",
                table: "Tracks");

            migrationBuilder.DropIndex(
                name: "IX_Albums_MusicianId",
                table: "Albums");

            migrationBuilder.DropColumn(
                name: "AlbumId",
                table: "Tracks");

            migrationBuilder.DropColumn(
                name: "MusicianId",
                table: "Albums");
        }
    }
}
