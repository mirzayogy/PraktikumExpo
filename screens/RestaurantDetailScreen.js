import { useEffect } from "react";
import { RestaurantDetail } from "../api/RestaurantDetail";

const RestaurantDetailScreen = ({ route }) => {
    const { id } = route.params;
    useEffect(() => {
        console.log(id)
        RestaurantDetail({ id: id}).then(result => {
            console.log(result.data)
        })
    }, [])
}

export default RestaurantDetailScreen;
