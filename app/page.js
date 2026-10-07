import ProductDiykit from '@/components/product/diykit'
import ProductPopular from '@/components/product/popular'
import Image from 'next/image'

export default function PageHome() {
  return (
    <div>
      <ProductPopular />
      <ProductDiykit />
    </div>
  )
}
