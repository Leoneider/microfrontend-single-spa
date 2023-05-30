import store from "@lab/state";
import { useEffect, useRef, useState } from "react";
export default function Root(props) {
  const [productSelected, setProductSelected] = useState(store.productSelected);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setProductSelected(store.productSelected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  
  return <section>
    <code>{ JSON.stringify(productSelected) }</code>
    </section>;
}
