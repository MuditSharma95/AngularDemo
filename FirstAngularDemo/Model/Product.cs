using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAngularDemo.Model
{
    public class Product
    {
            public int ProductId { get; set; }
            public string productName { get; set; }
            public string model { get; set; }
            public string Image{ get; set; }
            public decimal rating { get; set; }
    }
}
