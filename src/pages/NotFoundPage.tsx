import { Link } from "react-router";
import PageTitle from "../components/common/PageTitle";


const NotFoundPage = () => {
    return <div className="text-center py-16 flex flex-col items-center gap-4">
    <PageTitle>העמוד לא נמצא</PageTitle>
    <p>הכתובת לא נכונה</p>
    <Link className="inline-block px-4 py-2 rounded-lg font-semibold bg-brand-600 text-white hover:bg-brand-700" to="/">לקטלוג</Link>
    </div>
}

export default NotFoundPage;