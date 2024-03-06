import React, { useState, useEffect, useRef} from "react";

/* props
const AboutUs = () => {
   const member = props.member;
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  }; */

function AboutUs() {
    const[count, setCount] = useState(0);

    // const countRef = useRef(0);

    const handleClick = () =>{
      setCount(count + 1)
      // countRef.current++;
      console.log(count);
    }
    console.log("not rerendering");


    return(
      <>
      <button onClick={handleClick}> Click</button>
      </>
    )
   
 
 
   /* useEffect()
    const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProduct(response);
        console.log(response);
      });
  }, []);

  return (
    <>
      {" "}
      {product.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>
            <img
              src={product.image}
              alt="product"
              style={{ height: "100px" }}
            />
          </p>
          <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p>
        </div>
      ))}
    </>
  ); */
}

/* props and event handler  
return (
    <>
      <h1> The Team</h1>
      <p>Msanii: {member} senior developer!</p>
      <button onClick={() => setClick(click + 1)}>
        You have clicked me {click} times
      </button>

    </>
  ); */

export default AboutUs;
