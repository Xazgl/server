import { NextPage } from "next"
import AdminLayout from "../../src/component/admin/AdminLayout"
import { SalesAdminComponent } from "../../src/component/admin/SalesAdmin"

const  AdminTable: NextPage = () => {
    return (
      <>
        <AdminLayout title="OPEL Admin">
            <SalesAdminComponent />
        </AdminLayout>
      </>
    )
  }
  
  export default AdminTable