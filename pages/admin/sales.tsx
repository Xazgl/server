import { NextPage } from "next"
import AdminLayout from "../../src/component/admin/AdminLayout"
import { SalesAdminComponent } from "../../src/component/admin/SalesAdmin"
import { Admin, getSession, RedirectError, useSession } from "../../src/services/apiClient"
import { useRouter } from "next/router"
import { CircularProgress } from "@mui/material"

const  AdminTable: NextPage = () => {
  const router = useRouter()

    // const { isLoading, error, status , data, isSuccess} = useQuery<Admin, AxiosError<RedirectError>>('sid', getSession)
    const { isLoading, error, data, isSuccess } = useSession()
    if (isLoading) return <CircularProgress />

    return (
      <>
       {data && <div>{data.login}</div>}
      {isSuccess &&
        <AdminLayout title="OPEL Admin">
            <SalesAdminComponent />
        </AdminLayout>
        }
        {isLoading && <p>Loading..</p>}
        {error && <p>Error occurred!</p>}
      </>
    )
  }
  
  export default AdminTable