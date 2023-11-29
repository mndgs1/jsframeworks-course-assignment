import { useParams } from "react-router-dom";

export function ProductPage() {
    let params = useParams();

    return <div>Product: {params.id}</div>;
}
