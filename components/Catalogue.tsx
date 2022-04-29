import { Product } from '../interfaces/product.interface'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import Select from 'react-select'
import { StyledCatalogue} from '../styles/StyledCatalogue'

type Option = {
    value: string,
    label: string
}

const Catalogue = (props: {products: Product[], categories: string[],  points: number, redeemProduct: Function}) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All Products')
    const [ sort, setSort ] = useState('')
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(props.products)


    const onChange = (option: Option | null) => {
        const value = option!== null? option.value: 'All products'
        if (value === 'All products') {
            setFilteredProducts(props.products)
        } else {
            setFilteredProducts(props.products.filter((product: Product) => product.category === value))
        }
        return setSelectedCategory(value)
    }


    const getProductList = () => {
        if (sort !== '') {
            sort === 'lowest' ? 
                filteredProducts.sort((a, b) => (a.cost > b.cost) ? 1 : ((b.cost > a.cost) ? -1 : 0))
            :
                filteredProducts.sort((a, b) => (a.cost > b.cost) ? -1 : ((b.cost > a.cost) ? 1 : 0))
        }

        return filteredProducts.map((product: Product) => <ProductCard key={product._id} product={product} points={props.points} redeemProduct={props.redeemProduct}/>)
    }

    const options: Option[] = []
    props.categories.map((category: string) => options.push({value: category, label:category}))

    
    return <StyledCatalogue>
        <h2>PRODUCTS</h2>
        <div className='filters'>
            <label>Filter by:</label>
            <Select instanceId='1' className='react-select-container'  classNamePrefix="react-select" options={options} placeholder='All Products' isSearchable={true} onChange={onChange} />
            <div className='row'>
                <label>| Sort by:</label>
                <button onClick={()=>{setSort('lowest')}} className={sort === 'lowest' ? 'active' : ''}><span className='label'>Lowest Price</span></button>
                <button onClick={()=>{setSort('highest')}} className={sort === 'highest' ? 'active' : ''}><span className='label'>Highest Price</span></button>
            </div>
        </div>
        <div className='catalogue'>
            {getProductList()}
            
      </div>
    </StyledCatalogue>

}

export default Catalogue