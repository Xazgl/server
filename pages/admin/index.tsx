import { NextPage } from "next"
import TableService  from "../../src/component/TableService"
import AdminLayout from "../../src/component/admin/AdminLayout"


const  AdminTable: NextPage = () => {
    return (
      <>
        <AdminLayout title="OPEL Admin">
          <TableService />
        </AdminLayout>
      </>
    )
  }
  
  export default AdminTable
  