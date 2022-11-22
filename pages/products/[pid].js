import { useRouter } from 'next/router'
import React from 'react'
import path from "path";
import fs from "fs/promises";

const ProductDetailPage = (props) => {
  const {loadedProduct} = props
  if(!loadedProduct){
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  )
}

export const getStaticProps= async (context) =>{
  const {params } =context
  console.log(params)
  const productId = params.pid
  
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  const product = data.products.find(product => product.id===productId)
  return {
    props:{
      loadedProduct:product
    }
  }
}
export const getStaticPaths= async () =>{
  // 동적 페이지의 어떤 구체적인 인스턴스를 사전 생성할지 알려주는 함수
   return {
    paths:[
      {params: {pid: "p1"}},
    ],
    fallback:true
  }
}

export default ProductDetailPage