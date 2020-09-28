using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicApp.Models;
using MusicApp.ViewModels;

namespace MusicApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusiciansController : ControllerBase
    {
        private readonly ApplicationContext db;

        public MusiciansController(ApplicationContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MusicianViewModel>>> Get()
        {
            return await db.Musicians
                .Include(m => m.Albums)
                .Select(m => new MusicianViewModel(m))
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MusicianFormViewModel>> Get(int id)
        {
            var musician = await db.Musicians.FirstOrDefaultAsync(m => m.Id == id);
            if (musician == null)
                return NotFound();
            return new MusicianFormViewModel(musician);
        }

        [HttpPost]
        public ActionResult<MusicianFormViewModel> Post(Musician musician)
        {
            if (ModelState.IsValid)
            {
                db.Musicians.Add(musician);
                db.SaveChanges();
                return Ok(new MusicianFormViewModel(musician));
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public ActionResult<MusicianFormViewModel> Put(Musician musician)
        {
            if (ModelState.IsValid)
            {
                db.Update(musician);
                db.SaveChanges();
                return Ok(new MusicianFormViewModel(musician));
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public ActionResult<MusicianFormViewModel> Delete(int id)
        {
            var musician = db.Musicians.FirstOrDefault(m => m.Id == id);
            if (musician != null)
            {
                db.Musicians.Remove(musician);
                db.SaveChanges();
            }
            return Ok(new MusicianFormViewModel(musician));
        }
    }
}
