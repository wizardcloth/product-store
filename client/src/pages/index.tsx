import DefaultLayout from "@/layouts/default";
import { Link } from "react-router-dom";
import { productstore } from "@/store/product";
import { useEffect } from "react";
import Card from "@/components/cards";
export default function IndexPage() {
  const { fetchproducts, products } = productstore();
  useEffect(() => {
    fetchproducts();
    // console.log(fetchproducts());
  }, [fetchproducts])
  // console.log(products);
  return (
    <DefaultLayout>
      <h1 style={{ display: "flex", justifyContent: "center", fontSize: "150%",paddingBottom:"15px" }}>CURRENT PRODUCTS</h1>
      <div style={{display:"grid",gridTemplateColumns:"auto auto auto",gap:"20px"}}>
      {
        products.map((product:any)=>(
          <Card key={product._id} product={product}/>
        ))
      }
      </div>
      {products.length == 0 && (
        <div>
          <p style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}>No products found &#128531;<Link to={"/create"} style={{ textDecoration: "underline", paddingLeft: "10px", color: "red" }}>CREATE A PRODUCT </Link></p>
        </div>
      )}

    </DefaultLayout>
  );
}
