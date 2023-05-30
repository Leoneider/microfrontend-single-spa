import store, { fruit } from "@lab/state";
import { navigateToUrl } from "single-spa";
import "./style.css";

const addToCart = async () => {
    store.incrementCount();
  };
  
  const productDetail = (fruit:any):any => {  
    store.productSelected = fruit;
    navigateToUrl("/home/product");
   };

function Home() {
  return (
    <div className="list-products my-2">
    {fruit.map((fruit: any, index: any) => {
      return (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <div className="mx-auto">
            <img
              src={fruit.image}
              style={{
                height: "200px",
                width: "200px",
                margin: "7px",
                textAlign: "center",
              }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{fruit.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <button onClick={addToCart} type="button" className="btn btn-primary">Agregar</button>
            <button onClick={()=>productDetail(fruit)} value={fruit.name} type="button" className="btn btn-secondary ms-4">Ver</button>
          </div>
        </div>
      );
    })}
  </div>
  )
}
export default Home