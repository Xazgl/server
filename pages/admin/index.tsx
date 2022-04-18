import { NextPage } from "next"
import TableService  from "../../src/component/TableService"
import AdminLayout from "../../src/component/admin/AdminLayout"
import TableTradeIn from "../../src/component/TableTradeIn"


const  AdminTable: NextPage = () => {
    return (
      <>
        <AdminLayout title="OPEL Admin">
          <TableService />
          <TableTradeIn />
        </AdminLayout>
      </>
    )
  }
  
  export default AdminTable
  