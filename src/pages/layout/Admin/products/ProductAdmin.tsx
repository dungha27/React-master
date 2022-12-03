import { Link } from "react-router-dom";
// import { Button, Table, Popconfirm, message } from "antd";
// import Column from "antd/es/table/Column";
// import { PlusCircleOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { IProduct } from "../../../../interfaces/products";

type ProductProps = {
  products: IProduct[];
  onRemove: (id: number) => void

}


const ProductAdmin = (props: ProductProps) => {
  return (
    <div>
      <div>


      

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th scope="col" className="px-6 py-3">
              Sản Phẩm
            </th>
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((products: any) => {
              return <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {products.name}
                </th>
                <td className="px-6 py-4">
                  {products.image._0}
                </td>
                <td className="px-6 py-4">
                  {products.price}
                </td>
                <td className="px-6 py-4">
                  {products.description}
                </td>
                <td className="px-6 py-4 text-right">
                  <button><Link to={`${products.id}/update`} className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 mt-2 text-sm">Sửa </Link> </button>
                </td>
                <td className="px-6 py-4 text-left">
                  <button type='submit' onClick={() => props.onRemove(products.id)} className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 -ml-6 mb-1 mt-2 text-sm">Remove</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
      <Link to={"add"} className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 mt-2 text-sm">Thêm</Link>

    </div>
  )
}

export default ProductAdmin