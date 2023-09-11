/* eslint-disable react/prop-types */


const Product = ({item}) => {
    return (
        <>
       
        <div className='flex flex-1 items-center justify-center min-w-[300px] min-h-[250px] my-2'>
            <img className='w-60  h-72 hover:bg-slate-50 hover:opacity-50' src={item.image} alt="product_image" />

        </div>
        </>
    )
}

export default Product
