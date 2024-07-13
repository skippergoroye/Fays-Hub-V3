"use client"



// import React, { useEffect, useState } from 'react'
// type DataType = any; 
// type ErrorType = Error | null;

// function App() {
//   const [data, setData] = useState<DataType | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<ErrorType>(null);


//   useEffect(() => {
//     fetch('https://api.timbu.cloud/products?organization_id=d953e31b22eb4f7380c81a8dfb1c6063&reverse_sort=false&page=1&size=10&Appid=1YMH6UYIF70BF7W&Apikey=f4d8e6a4b5d94d7696e4cb943f0b0a0d20240712233045598414')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }


//   console.log(data)

//   return (
//     <div>
//       <h1>Data</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// export default App;





import React, { useEffect, useState } from 'react';

type DataType = any;
type ErrorType = Error | null;

function App() {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    fetch('https://api.timbu.cloud/products?organization_id=d953e31b22eb4f7380c81a8dfb1c6063&reverse_sort=false&page=1&size=10&Appid=1YMH6UYIF70BF7W&Apikey=f4d8e6a4b5d94d7696e4cb943f0b0a0d20240712233045598414')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  console.log(data)

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data && data.products && data.items.map((product: any) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '16px', margin: '16px', width: '200px', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => alert(`Added ${product.name} to cart`)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

