import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../utils/helpers'

const ProductCard = ({ product, category }) => {
    const { title, handle } = product;
    const {altText, originalSrc} = product.images.edges[0].node;
    const price = product.priceRange.minVariantPrice.amount;
    
    console.log('productProp', product);
    console.log('category', category)

    return (

    <Link 
        href={`/categorias/${category}/${handle}`} 
        passHref
    >
        <a className="group">
            <div className="w-11/12">
                <div className="relative group-hover:opacity-75 h-72">
                    <Image 
                        src={originalSrc} 
                        alt={altText} 
                        layout='fill'
                        objectFit='cover'
                        priority
                    />
                </div>
            </div>
            <div className="w-11/12 flex justify-around items-center">
                <p className="mr-2 text-lg font-medium text-gray-900">{title}</p>
                <p className="text-base tex-gray-700">{formatter.format(price)}</p>
            </div>
        </a>
    </Link>
  );
};

export default ProductCard;