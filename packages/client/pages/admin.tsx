import dynamic from "next/dynamic"
const AdminApp = dynamic(() => import("../admin"), { ssr: false })

const AdminPage = () => {
 return <AdminApp />;
};

export default AdminPage