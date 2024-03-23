export interface ReservationItem {
    carId: string
    CarModel: string
    numOfDays: number
    pickupDate: string
    pickupLocation: string
    returnDate: string
    returnLocation: string
}
export interface CarItem {
    id: string
    model:string
    picture: string
}

export interface CarJson {
    count: number
    data: CarItem[]
}