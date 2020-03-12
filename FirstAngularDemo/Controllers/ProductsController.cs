using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FirstAngularDemo.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FirstAngularDemo.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ProductsController : ControllerBase
    {
        // GET: /<controller>/
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return ProductListData();
        }

        [HttpGet]
        public Product GetById(int id)
        {
            return ProductListData().Where(x => x.ProductId == Convert.ToString(id)).FirstOrDefault();
        }
        public static List<Product> ProductListData()
        {
            List<Product> listProducts = new List<Product>()
                {
                    new Product()
                     {
                           ProductId =  "1" ,
                           ProductName =  "Mobile ",
                           Model =  "Samsun Galaxy Y" ,
                           Image =" assets/Images/mobile.jpg ",
                           Rating=1.5m,
                        },
                    new Product()
                        {
                           ProductId =  "2" ,
                           ProductName =  "Laptop ",
                           Model =  "Mac air ",
                           Image = "assets/Images/laptop.jpg" ,
                           Rating=3.5m,
                        },
                    new Product()
                        {
                           ProductId =  "3" ,
                           ProductName =  "Headphones" ,
                           Model =  "Sony WIC400" ,
                           Image =  "assets/Images/headphone.jpg" ,
                           Rating=5m,
                        }
            };
            return listProducts;
        }
    }
}
