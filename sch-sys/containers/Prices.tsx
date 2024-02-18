import { PriceTable } from "@/components/PriceTable"
import data from "@/lib/prices.json";
const Prices = () => {
  return (
    <section id="prices">
      <h1 className='text-2xl font-bold uppercase py-5'>Prices</h1>
      <div className='flex flex-row justify-center flex-wrap items-start gap-y-5 gap-x-5 pb-8 text-white'>
        {data.data.map((item, index) => (
          <PriceTable key={index}
            includes={item}
          />
        ))}

      </div>
    </section>
  )
}

export default Prices