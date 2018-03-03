using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace webApi.Models
{
  public class clGitHub
  {
    
    public static GitHubObj Read(string key)
    {
      GitHubObj res;
      string url = WebConfigurationManager.AppSettings["GitHubUrl"];
   
      var client = new RestClient(url+key);
      var request = new RestRequest(Method.GET);
      request.AddHeader("cache-control", "no-cache");
      IRestResponse response = client.Execute(request);
      res = JsonConvert.DeserializeObject<GitHubObj>(response.Content);
      return res;
    }

  }

  public class Owner
  {
    
    public string avatar_url { get; set; }
   
  }

  public class Item
  {
    public int id { get; set; }
    public string name { get; set; }
    public string full_name { get; set; }
    public Owner owner { get; set; }
    
    public string html_url { get; set; }
    public string description { get; set; }
  
  }

  public class GitHubObj
  {
    public int total_count { get; set; }
    public bool incomplete_results { get; set; }
    public List<Item> items { get; set; }
  }



}
