class Amazonseller  //Tempalte
{
    // producttype : String ="Watches";
    // baseprice : number =1000;
    // category : String = "Lifestyle";

      producttype : String ;
      baseprice : number ;
      category : String ;

    constructor()
    {
        this.producttype="watches";
        this.baseprice=1500;
        this.category="Lifestyle"

    }

    //this keyword is mainly used to assign the value when its inside a class
    amazonsellingprice() {
        const amazonprice=(this.baseprice *0.02) +this.baseprice;
        console.log("Amazon Selling Pirce: "  + amazonprice);
    }

    amazonsale()
    {
        console.log(`Finally the Amazon sale came for the ${this.category} items for brand new ${this.producttype} Enjoy`);
    }

}

let amazonseller=new Amazonseller();
amazonseller.amazonsellingprice();
amazonseller.amazonsale();

let amazonseller1=new Amazonseller();
amazonseller1.amazonsellingprice();
amazonseller1.amazonsale();
