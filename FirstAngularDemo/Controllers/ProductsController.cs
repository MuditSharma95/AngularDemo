using FirstAngularDemo.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FirstAngularDemo.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class ProductsController : ControllerBase
    {
        // GET: /<controller>/
        private readonly ILogger<ProductsController> _logger;

        private static List<Product> mainProducts = new List<Product>();

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
            mainProducts= new List<Product>()
                {
                    new Product()
                     {
                           ProductId =  1 ,
                           productName =  "Mobile ",
                           model =  "Samsun Galaxy Y" ,
                           Image ="assets/Images/mobile.jpg ",
                           rating=1.5m,
                        },
                    new Product()
                        {
                           ProductId =  2 ,
                           productName =  "Laptop ",
                           model =  "Mac air ",
                           Image = "assets/Images/laptop.jpg" ,
                           rating=3.5m,
                        },
                    new Product()
                        {
                           ProductId =  3 ,
                           productName =  "Headphones" ,
                           model =  "Sony WIC400" ,
                           Image =  "assets/Images/headphone.jpg" ,
                           rating=5m,
                        }
            };

        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return ProductListData();
        }

        [HttpGet]
        public Product GetById(int id)
        {
            return ProductListData().Where(x => x.ProductId == id).FirstOrDefault();
        }

        [HttpPost]
        public bool AddProduct(Product product)
        {
            product.ProductId = mainProducts.Count();
            product.Image = "assets/Images/mobile.jpg ";
            mainProducts.Add(product);
            return true;
        }

        public static List<Product> ProductListData()
        {
            return mainProducts;
        }
    }
}
