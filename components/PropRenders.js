import react,{useState} from "react"
import ProductGrid from "./ProductGrid";

export default function PropRenders() {
  const [num, setNum] = useState(1);

  const handleNum = (flag) => {
      if(flag === "sub" && num > 1){
        setNum(num-1)
      }
      if(flag === "add" && num < 10){
        setNum(num+1)
      }
  }
  return (
    <div className=" lg:px-20 xl:px-40">
      <div className="px-4 2xl:container 2xl:mx-auto flex-col md:flex-row  md:px-6 2xl:px-20 flex justify-center items-stretch ">
        <div className=" flex xl:justify-between items-stretch flex-col md:w-1/2 lg:w-1/2 pt-10">
          <img className="rounded-lg" src="./p3.jpg" alt="Property Render" />
        </div>
        <div className="md:w-1/2 md:mt-0 flex  md:px-6 xl:px-8  2xl:justify-between items-start flex-col md:py-2">
          <ProductGrid />
        </div>
      </div>
    </div>

  )
}
