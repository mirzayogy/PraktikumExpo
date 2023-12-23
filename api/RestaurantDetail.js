import ApiManager from "./ApiManager"

export const RestaurantDetail = async restaurant => {
    try {
        const result = await ApiManager('/detail/' + restaurant.id, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            data: restaurant
        })

        return result
    } catch (error) {
        return error
    }
}