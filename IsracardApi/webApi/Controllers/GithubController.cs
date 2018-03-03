using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using webApi.Models;
using System.Web.Http.Cors;

namespace webApi.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class GithubController : ApiController
  {

    [Route("api/GetGitHub/{search_key}")]
    [HttpGet]
    public IHttpActionResult GetGitHub(string search_key)
    {
      GitHubObj res = clGitHub.Read(search_key);
    
      return Ok(res);

    }

   

    [Route("api/GetBookmark/")]
    [HttpGet]
    public IHttpActionResult GetBookmark()
    {
      clResponse resp = new clResponse();
      resp.Date = DateTime.Now;

      try
      {
        resp.Result = HttpContext.Current.Session["MyStoredValue"];
        resp.Status = 0;
      }
      catch (Exception ex)
      {
        resp.Result = ex.StackTrace;
        resp.Status = -1;
      }
      return Ok(HttpContext.Current.Session["MyStoredValue"]);

    }


    [HttpPost]
    public IHttpActionResult Post([FromBody]Item item)
    {

      clResponse resp = new clResponse();
      resp.Date = DateTime.Now;

      try
      {
        List<Item> items = (List<Item>)HttpContext.Current.Session["MyStoredValue"];
        if (items == null)
        {
          items = new List<Item>();
        }
        items.Add(item);
        HttpContext.Current.Session["MyStoredValue"] = items;
        resp.Result = "Succes";
        resp.Status = 0;
      }
      catch (Exception ex)
      {
        resp.Result = ex.StackTrace;
        resp.Status = -1;
      }

      return Ok(resp);


    }
  

  }
}
