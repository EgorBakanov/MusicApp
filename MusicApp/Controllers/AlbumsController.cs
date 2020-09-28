using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicApp.Models;
using MusicApp.ViewModels;

namespace MusicApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly ApplicationContext db;

        public AlbumsController(ApplicationContext db)
        {
            this.db = db;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AlbumFormViewModel>> Get(int id)
        {
            var album = await db.Albums.FirstOrDefaultAsync(t => t.Id == id);
            if (album == null)
                return NotFound();
            return new AlbumFormViewModel(album);
        }

        [HttpPost]
        public ActionResult<AlbumFormViewModel> Post(Album album)
        {
            if (ModelState.IsValid)
            {
                db.Albums.Add(album);
                db.SaveChanges();
                return Ok(new AlbumFormViewModel(album));
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public ActionResult<AlbumFormViewModel> Put(Album album)
        {
            if (ModelState.IsValid)
            {
                db.Update(album);
                db.SaveChanges();
                return Ok(new AlbumFormViewModel(album));
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public ActionResult<AlbumFormViewModel> Delete(int id)
        {
            var album = db.Albums.FirstOrDefault(x => x.Id == id);
            if (album != null)
            {
                db.Albums.Remove(album);
                db.SaveChanges();
            }
            return Ok(new AlbumFormViewModel(album));
        }
    }
}
