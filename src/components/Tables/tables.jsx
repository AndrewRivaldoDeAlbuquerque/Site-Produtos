import './tables.css';
import { FaTrash, FaEdit } from "react-icons/fa";

function Tables() {
    return (

        <div className="container mt-3">
            <h2>Lista de produtos</h2>

            <table className="tables">
                <thead>
                    <tr>
                        <th>Produto </th>
                        <th>Preço</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maionese</td>
                        <td>R$ 7,45</td>
                        <td >
                            <button className='button'>
                                <FaTrash />
                            </button>
                            <button className='button'>
                                <FaEdit />
                            </button>
                        </td>

                    </tr>
                    <tr>
                        <td>Feijão</td>
                        <td>R$ 6,95</td>
                        <td >
                            <button className='button'>
                                <FaTrash />
                            </button>
                            <button className='button'>
                                <FaEdit />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Pão</td>
                        <td>R$ 4,95</td>
                        <td className='icones'>
                            <button className='button'>
                                <FaTrash />
                            </button>
                            <button className='button'>
                                <FaEdit />
                            </button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default Tables;