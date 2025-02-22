import DefaultLayout from "@/layouts/default";
import { Link } from "react-router-dom";
import { productstore } from "@/store/product";
import { useEffect } from "react";
import Card from "@/components/cards";
import "../styles/home.css"
import { Loader } from "lucide-react";
export default function IndexPage() {
  const { fetchproducts, products, isloading } = productstore();
  useEffect(() => {
    fetchproducts();
    // console.log(fetchproducts());
  }, [fetchproducts])
  // console.log(products);
  return (
    (isloading) ? (
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="w-[80%] rounded-md  max-w-sm bg-zinc-200 border-zinc-800">
          <div className="flex flex-col gap-4 items-center pt-6">
            <Loader className="size-15 text-emerald-500 animate-spin" />
            <h1 className="text-2xl mb-10 font-bold text-black">Loading...</h1>
          </div>
        </div>
      </div>
    ) : (
      <DefaultLayout>
        <div>
          <h1 id="headmain" style={{ display: "flex", justifyContent: "center", fontSize: "150%", paddingBottom: "15px" }}>CURRENT PRODUCTS</h1>
        </div>
        <div className="containergrid"  >
          {
            products.map((product: any) => (
              <Card key={product._id} product={product} />
            ))
          }
        </div>
        {products.length == 0 && (
          <div>
            <p style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}>No products found &#128531;<Link to={"/create"} style={{ textDecoration: "underline", paddingLeft: "10px", color: "red" }}>CREATE A PRODUCT </Link></p>
          </div>
        )}
      </DefaultLayout>
    )
  )
};
